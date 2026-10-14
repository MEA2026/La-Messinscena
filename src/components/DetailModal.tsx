import React, { useEffect } from 'react';
import { SceneNode } from '../types';
import { X, Bookmark, BookmarkCheck, ArrowRight, MapPin, Calendar, Compass, Quote, Sparkles, Layers } from 'lucide-react';

interface DetailModalProps {
  node: SceneNode | null;
  onClose: () => void;
  onNavigateToNode: (targetNodeId: string) => void;
  allNodes: SceneNode[];
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  node,
  onClose,
  onNavigateToNode,
  allNodes,
  isBookmarked,
  onToggleBookmark
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!node) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-stone-900 border border-stone-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80 shrink-0">
          <div className="flex items-center gap-3">
            <span className={`px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded border ${
              node.domain === 'teatro'
                ? 'bg-amber-950/80 text-amber-300 border-amber-800/80'
                : node.domain === 'cinema'
                ? 'bg-sky-950/80 text-sky-300 border-sky-800/80'
                : 'bg-violet-950/80 text-violet-300 border-violet-800/80'
            }`}>
              {node.domain} · {node.category}
            </span>
            <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-stone-500" />
              {node.yearLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(node.id)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-400 text-stone-950 border-amber-300'
                  : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
              }`}
              title={isBookmarked ? 'Rimuovi dai preferiti' : 'Salva nei preferiti'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
              title="Chiudi scheda (Esc)"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8 scrollbar-thin">
          
          {/* Main Title & Subtitle */}
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{node.location}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-100">
              {node.label}
            </h2>
            <p className="text-sm sm:text-base text-amber-200/80 font-serif italic mt-1.5">
              {node.subtitle}
            </p>
          </div>

          {/* Curatorial Essay with Drop Cap */}
          <div className="space-y-4 text-stone-200 text-sm sm:text-base leading-relaxed font-sans max-w-prose">
            {node.fullEssay.map((paragraph, idx) => {
              if (idx === 0) {
                return (
                  <p key={idx} className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-400">
                    {paragraph}
                  </p>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Famous Quote (if available) */}
          {node.famousQuote && (
            <div className="my-6 p-5 sm:p-6 bg-stone-950/60 border-y border-stone-800 relative rounded-lg">
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 left-4 pointer-events-none" />
              <blockquote className="font-serif italic text-base sm:text-lg text-amber-100/90 pl-6 leading-relaxed">
                «{node.famousQuote.text}»
              </blockquote>
              <div className="text-right text-xs text-stone-400 mt-2 font-sans font-medium">
                — {node.famousQuote.author}
                {node.famousQuote.source && <span className="text-stone-500">, {node.famousQuote.source}</span>}
              </div>
            </div>
          )}

          {/* Approfondimento Iconografico / Visual Schema Module */}
          <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-5 sm:p-6 shadow-md">
            <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Approfondimento Iconografico & Spaziale
              </span>
              <span className="font-mono text-stone-500">{node.iconographicDetail.diagramType.replace('_', ' ').toUpperCase()}</span>
            </div>

            <h3 className="font-serif text-xl font-semibold text-stone-100 mb-1">
              {node.iconographicDetail.title}
            </h3>
            <p className="text-xs text-stone-400 font-serif italic mb-4">
              {node.iconographicDetail.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
              {node.iconographicDetail.explanation}
            </p>

            {/* Visual Markers List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-stone-800/80">
              {node.iconographicDetail.visualElements.map((elem, idx) => (
                <div key={idx} className="bg-stone-900 border border-stone-800/80 rounded-lg p-3 text-xs">
                  <span className="font-semibold text-amber-300 block mb-1">
                    {elem.label}
                  </span>
                  <span className="text-stone-400 leading-normal block">
                    {elem.description}
                  </span>
                </div>
              ))}
            </div>

            {node.iconographicDetail.comparativeNote && (
              <div className="mt-4 pt-3 border-t border-stone-800/80 text-xs text-sky-300 flex items-start gap-2">
                <Layers className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Corrispondenza filmica:</strong> {node.iconographicDetail.comparativeNote}</span>
              </div>
            )}
          </div>

          {/* Key Works / Landmark Productions */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-stone-200 mb-3 flex items-center gap-2">
              <span>Opere & Traguardi Esemplari</span>
            </h3>

            <div className="space-y-2.5">
              {node.keyWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="bg-stone-950/50 border border-stone-800/80 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber-400 font-semibold">{work.year}</span>
                    <span className="font-serif text-sm font-medium text-stone-100">{work.title}</span>
                  </div>
                  <span className="text-stone-400">{work.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Network Links (Clickable!) */}
          <div className="pt-4 border-t border-stone-800">
            <h3 className="font-serif text-sm uppercase tracking-wider text-stone-400 font-semibold mb-3">
              Connessioni Dirette nella Rete ({node.connections.length})
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {node.connections.map((conn, idx) => {
                const targetNode = allNodes.find((n) => n.id === conn.targetId);
                if (!targetNode) return null;

                return (
                  <button
                    key={idx}
                    onClick={() => onNavigateToNode(conn.targetId)}
                    className="group bg-stone-950 hover:bg-stone-800/80 border border-stone-800 hover:border-amber-400/80 rounded-lg p-3 text-left transition-all cursor-pointer flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[10px] text-amber-400">
                        <span className="uppercase tracking-wider font-semibold">{targetNode.domain}</span>
                        <span>·</span>
                        <span className="font-mono">{targetNode.yearLabel}</span>
                      </div>
                      <h4 className="font-serif text-sm font-semibold text-stone-200 group-hover:text-amber-200 transition-colors">
                        {targetNode.label}
                      </h4>
                      <p className="text-[11px] text-stone-400 line-clamp-1 mt-0.5">
                        {conn.relation}
                      </p>
                    </div>

                    <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-stone-800 bg-stone-950/80 text-xs text-stone-400 flex items-center justify-between shrink-0">
          <span>Archivio "La Messinscena nel tempo"</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-stone-900 bg-stone-200 hover:bg-white rounded transition-colors cursor-pointer"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
