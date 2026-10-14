import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { SceneNode, NodeLink } from '../types';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Sparkles, HelpCircle, Layers } from 'lucide-react';

interface NetworkViewProps {
  nodes: SceneNode[];
  allNodes: SceneNode[];
  links: NodeLink[];
  onSelectNode: (node: SceneNode) => void;
  selectedNodeId?: string;
}

export const NetworkView: React.FC<NetworkViewProps> = ({
  nodes,
  allNodes,
  links,
  onSelectNode,
  selectedNodeId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pan and Zoom transform state
  const [transform, setTransform] = useState({ x: 40, y: 30, scale: 0.95 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  // Node dragging state
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({});
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Hover state for highlighting neighborhood
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [showLegend, setShowLegend] = useState(false);

  // Initialize node positions from dataset
  useEffect(() => {
    const initialPos: Record<string, { x: number; y: number }> = {};
    allNodes.forEach((node) => {
      // Scale coordinates into a comfortable canvas coordinate space
      initialPos[node.id] = {
        x: node.x * 1.35 + 80,
        y: node.y * 1.15 + 40
      };
    });
    setNodePositions(initialPos);
  }, [allNodes]);

  // Compute set of visible node IDs
  const visibleNodeIds = useMemo(() => new Set(nodes.map((n) => n.id)), [nodes]);

  // Compute connected nodes for hovered node
  const connectedInfo = useMemo(() => {
    if (!hoveredNodeId) return { neighborIds: new Set<string>(), activeLinks: new Set<number>() };
    
    const neighborIds = new Set<string>([hoveredNodeId]);
    const activeLinks = new Set<number>();

    links.forEach((link, idx) => {
      if (link.source === hoveredNodeId) {
        neighborIds.add(link.target);
        activeLinks.add(idx);
      } else if (link.target === hoveredNodeId) {
        neighborIds.add(link.source);
        activeLinks.add(idx);
      }
    });

    return { neighborIds, activeLinks };
  }, [hoveredNodeId, links]);

  // Zoom controls
  const handleZoom = (delta: number) => {
    setTransform((prev) => {
      const newScale = Math.min(Math.max(prev.scale + delta, 0.4), 2.2);
      return { ...prev, scale: newScale };
    });
  };

  const handleResetZoom = () => {
    setTransform({ x: 40, y: 30, scale: 0.95 });
  };

  const handleFitView = useCallback(() => {
    if (!containerRef.current || nodes.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    nodes.forEach((n) => {
      const pos = nodePositions[n.id] || { x: n.x, y: n.y };
      if (pos.x < minX) minX = pos.x;
      if (pos.x > maxX) maxX = pos.x;
      if (pos.y < minY) minY = pos.y;
      if (pos.y > maxY) maxY = pos.y;
    });

    const padding = 100;
    const contentW = maxX - minX + padding * 2;
    const contentH = maxY - minY + padding * 2;
    
    const scaleX = rect.width / contentW;
    const scaleY = rect.height / contentH;
    const newScale = Math.min(Math.max(Math.min(scaleX, scaleY), 0.5), 1.4);

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;

    setTransform({
      x: rect.width / 2 - midX * newScale,
      y: rect.height / 2 - midY * newScale,
      scale: newScale
    });
  }, [nodes, nodePositions]);

  // Wheel zoom handler
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.08 : -0.08;
    setTransform((prev) => {
      const newScale = Math.min(Math.max(prev.scale + zoomFactor, 0.4), 2.2);
      return { ...prev, scale: newScale };
    });
  };

  // Canvas pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (draggedNodeId) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedNodeId) {
      // Dragging a node
      const currentPos = nodePositions[draggedNodeId];
      if (!currentPos) return;

      const newX = (e.clientX - transform.x) / transform.scale - dragOffset.x;
      const newY = (e.clientY - transform.y) / transform.scale - dragOffset.y;

      setNodePositions((prev) => ({
        ...prev,
        [draggedNodeId]: { x: Math.round(newX), y: Math.round(newY) }
      }));
      return;
    }

    if (isPanning) {
      setTransform((prev) => ({
        ...prev,
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
      }));
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    setDraggedNodeId(null);
  };

  // Node drag start
  const handleNodeMouseDown = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation();
    const pos = nodePositions[nodeId];
    if (!pos) return;

    setDraggedNodeId(nodeId);
    setDragOffset({
      x: (e.clientX - transform.x) / transform.scale - pos.x,
      y: (e.clientY - transform.y) / transform.scale - pos.y
    });
  };

  // Filter links: both source and target must be visible in current search/filter
  const visibleLinks = useMemo(() => {
    return links.filter((link) => visibleNodeIds.has(link.source) && visibleNodeIds.has(link.target));
  }, [links, visibleNodeIds]);

  const getNodeColor = (domain: SceneNode['domain']) => {
    switch (domain) {
      case 'teatro':
        return {
          fill: '#451a03',
          border: '#f59e0b',
          glow: 'rgba(245, 158, 11, 0.35)',
          badge: 'bg-amber-950 text-amber-300 border-amber-700/60'
        };
      case 'cinema':
        return {
          fill: '#082f49',
          border: '#38bdf8',
          glow: 'rgba(56, 189, 248, 0.35)',
          badge: 'bg-sky-950 text-sky-300 border-sky-700/60'
        };
      case 'ibrido':
      default:
        return {
          fill: '#2e1065',
          border: '#c084fc',
          glow: 'rgba(192, 132, 252, 0.35)',
          badge: 'bg-violet-950 text-violet-300 border-violet-700/60'
        };
    }
  };

  const getLinkColor = (type: NodeLink['type'], isActive: boolean) => {
    if (isActive) return '#fbbf24'; // Active bright amber
    switch (type) {
      case 'theatre_to_cinema':
        return '#38bdf8'; // sky
      case 'opposition_rupture':
        return '#f43f5e'; // rose
      case 'direct_influence':
        return '#818cf8'; // indigo
      case 'filiation':
      default:
        return '#34d399'; // emerald
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      className="relative w-full h-[calc(100vh-140px)] min-h-[580px] bg-stone-950 overflow-hidden cursor-grab active:cursor-grabbing select-none"
    >
      {/* Background grid canvas pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #78716c 1px, transparent 0)`,
          backgroundSize: `${32 * transform.scale}px ${32 * transform.scale}px`,
          backgroundPosition: `${transform.x}px ${transform.y}px`
        }}
      />

      {/* Interactive SVG Network Layer */}
      <svg
        className="w-full h-full absolute inset-0"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id="node-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="link-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Markers for link arrows */}
          <marker id="arrow-default" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#78716c" opacity="0.6" />
          </marker>
          <marker id="arrow-active" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#fbbf24" />
          </marker>
        </defs>

        <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
          
          {/* Connection Links */}
          {visibleLinks.map((link, idx) => {
            const sourcePos = nodePositions[link.source];
            const targetPos = nodePositions[link.target];
            if (!sourcePos || !targetPos) return null;

            const isHoveredLink = connectedInfo.activeLinks.has(idx);
            const isFaded = hoveredNodeId && !isHoveredLink;

            // Bezier curve control points
            const dx = targetPos.x - sourcePos.x;
            const dy = targetPos.y - sourcePos.y;
            const cx = sourcePos.x + dx / 2;
            const cy = sourcePos.y + dy / 2 - (dx !== 0 ? Math.sign(dx) * 20 : 20);

            const pathD = `M ${sourcePos.x} ${sourcePos.y} Q ${cx} ${cy} ${targetPos.x} ${targetPos.y}`;
            const strokeColor = getLinkColor(link.type, isHoveredLink);

            return (
              <g key={`link-${link.source}-${link.target}-${idx}`} className="transition-opacity duration-200">
                <path
                  d={pathD}
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth={isHoveredLink ? 3.2 : 1.5}
                  strokeDasharray={link.type === 'opposition_rupture' ? '5,4' : undefined}
                  opacity={isFaded ? 0.08 : isHoveredLink ? 1 : 0.45}
                  markerEnd={isHoveredLink ? 'url(#arrow-active)' : 'url(#arrow-default)'}
                  filter={isHoveredLink ? 'url(#link-glow)' : undefined}
                  className="transition-all duration-150"
                />

                {/* Relation text badge on hover */}
                {isHoveredLink && (
                  <g transform={`translate(${cx}, ${cy})`}>
                    <rect
                      x="-80"
                      y="-12"
                      width="160"
                      height="20"
                      rx="4"
                      fill="#1c1917"
                      stroke="#fbbf24"
                      strokeWidth="1"
                      className="shadow-md"
                    />
                    <text
                      x="0"
                      y="2"
                      textAnchor="middle"
                      fill="#fef3c7"
                      fontSize="9"
                      fontFamily="system-ui"
                      fontWeight="500"
                    >
                      {link.relation.length > 28 ? link.relation.substring(0, 26) + '...' : link.relation}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Node Elements */}
          {nodes.map((node) => {
            const pos = nodePositions[node.id] || { x: node.x, y: node.y };
            const isHovered = hoveredNodeId === node.id;
            const isNeighbor = connectedInfo.neighborIds.has(node.id);
            const isSelected = selectedNodeId === node.id;
            const isFaded = hoveredNodeId && !isHovered && !isNeighbor;
            const colors = getNodeColor(node.domain);

            return (
              <g
                key={node.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                onMouseDown={(e) => handleNodeMouseDown(e, node.id)}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectNode(node);
                }}
                className="cursor-pointer transition-opacity duration-200"
                style={{ opacity: isFaded ? 0.18 : 1 }}
              >
                {/* Node Outer Glow if hovered or selected */}
                {(isHovered || isSelected) && (
                  <circle
                    r={38}
                    fill={colors.glow}
                    className="animate-pulse"
                  />
                )}

                {/* Node Main Circle */}
                <circle
                  r={isHovered || isSelected ? 28 : 24}
                  fill={colors.fill}
                  stroke={isHovered || isSelected ? '#fbbf24' : colors.border}
                  strokeWidth={isHovered || isSelected ? 3 : 2}
                  filter={isHovered ? 'url(#node-glow)' : undefined}
                  className="transition-all duration-150 shadow-lg"
                />

                {/* Domain Icon / Glyph inside Node */}
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize={isHovered ? '11' : '10'}
                  fontFamily="system-ui"
                  fontWeight="600"
                  pointerEvents="none"
                >
                  {node.yearStart > 0 ? (node.yearStart >= 1800 ? String(node.yearStart).slice(2) : node.yearStart) : 'BC'}
                </text>

                {/* Node Label Box Below */}
                <g transform="translate(0, 36)">
                  {/* Subtle backdrop rectangle for text legibility */}
                  <rect
                    x="-85"
                    y="-2"
                    width="170"
                    height="32"
                    rx="4"
                    fill="#0c0a09"
                    fillOpacity="0.88"
                    stroke={isHovered ? '#fbbf24' : '#292524'}
                    strokeWidth={isHovered ? 1 : 0.5}
                  />

                  <text
                    x="0"
                    y="11"
                    textAnchor="middle"
                    fill={isHovered ? '#fde68a' : '#f5f5f4'}
                    fontSize="11"
                    fontWeight="600"
                    fontFamily="serif"
                    pointerEvents="none"
                  >
                    {node.label.length > 24 ? node.label.substring(0, 22) + '...' : node.label}
                  </text>

                  <text
                    x="0"
                    y="23"
                    textAnchor="middle"
                    fill="#a8a29e"
                    fontSize="8.5"
                    fontFamily="system-ui"
                    pointerEvents="none"
                  >
                    {node.yearLabel} · {node.category.toUpperCase()}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Floating Canvas Action Controls */}
      <div className="absolute bottom-5 right-5 flex flex-col gap-1.5 bg-stone-900/90 backdrop-blur-md p-1.5 rounded-lg border border-stone-800 shadow-xl z-20">
        <button
          onClick={() => handleZoom(0.15)}
          className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors cursor-pointer"
          title="Ingrandisci (Zoom In)"
          aria-label="Ingrandisci"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleZoom(-0.15)}
          className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors cursor-pointer"
          title="Rimpicciolisci (Zoom Out)"
          aria-label="Rimpicciolisci"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          onClick={handleFitView}
          className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors cursor-pointer"
          title="Adatta alla schermata"
          aria-label="Adatta alla schermata"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        <button
          onClick={handleResetZoom}
          className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors cursor-pointer"
          title="Ripristina visuale 1:1"
          aria-label="Ripristina visuale"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <div className="h-px bg-stone-800 my-0.5" />

        <button
          onClick={() => setShowLegend(!showLegend)}
          className={`p-2 rounded transition-colors cursor-pointer ${
            showLegend ? 'bg-amber-500/20 text-amber-300' : 'text-stone-300 hover:text-white hover:bg-stone-800'
          }`}
          title="Legenda nodi e connessioni"
          aria-label="Legenda"
        >
          <Layers className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Instruction / Status Bar (Top Left) */}
      <div className="absolute top-4 left-4 pointer-events-none z-10 flex flex-col gap-1">
        <div className="bg-stone-950/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-stone-800 text-xs text-stone-300 flex items-center gap-2 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Trascina lo sfondo per spostarti · Clicca su un nodo per la scheda · Trascina i nodi liberamente</span>
        </div>
      </div>

      {/* Floating Node Details Card on Hover (Bottom Left) */}
      {hoveredNodeId && (
        <div className="absolute bottom-5 left-5 max-w-sm bg-stone-900/95 backdrop-blur-md p-4 rounded-lg border border-amber-500/40 shadow-2xl z-20 pointer-events-none transition-all">
          {(() => {
            const n = allNodes.find((x) => x.id === hoveredNodeId);
            if (!n) return null;
            return (
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-400">
                    {n.domain.toUpperCase()} · {n.yearLabel}
                  </span>
                  <span className="text-[10px] text-stone-400">{n.location}</span>
                </div>
                <h4 className="font-serif text-base font-semibold text-stone-100">{n.label}</h4>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">{n.shortDescription}</p>
                <div className="mt-2.5 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-amber-300/90 font-medium">
                  <span>Clicca per aprire il saggio e la tavola</span>
                  <span>{n.connections.length} connessioni</span>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Interactive Legend Box Overlay */}
      {showLegend && (
        <div className="absolute top-14 right-5 w-72 bg-stone-900/95 backdrop-blur-md p-4 rounded-lg border border-stone-700 shadow-2xl z-20 text-xs text-stone-200">
          <div className="flex items-center justify-between mb-3 border-b border-stone-800 pb-2">
            <span className="font-serif text-sm font-semibold text-stone-100 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              Legenda della Rete
            </span>
            <button
              onClick={() => setShowLegend(false)}
              className="text-stone-400 hover:text-stone-100 cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-[11px] text-stone-400 block mb-1.5 font-medium uppercase tracking-wider">
                Ambiti dei Nodi
              </span>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-900 border border-amber-500 shrink-0" />
                  <span>Teatro & Drammaturgia dello spazio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-sky-950 border border-sky-400 shrink-0" />
                  <span>Cinema & Grammatica filmica</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-violet-950 border border-violet-400 shrink-0" />
                  <span>Ibrido, Regia d'Autore & Transizione</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[11px] text-stone-400 block mb-1.5 font-medium uppercase tracking-wider">
                Relazioni & Influenze
              </span>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-sky-400 shrink-0" />
                  <span>Transizione Teatro → Cinema</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-indigo-400 shrink-0" />
                  <span>Influenza diretta / Maestro-Allievo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-emerald-400 shrink-0" />
                  <span>Filiazione teorica / Continuità</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 border-t border-dashed border-rose-400 shrink-0" />
                  <span>Rottura stilistica / Opposizione dialettica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
