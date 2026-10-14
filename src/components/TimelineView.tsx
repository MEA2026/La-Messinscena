import React, { useState } from 'react';
import { SceneNode } from '../types';
import { ERAS } from '../data/miseEnSceneData';
import { Sparkles, ArrowRight, ArrowDownUp } from 'lucide-react';

interface TimelineViewProps {
  nodes: SceneNode[];
  onSelectNode: (node: SceneNode) => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ nodes, onSelectNode }) => {
  const [selectedEraFilter, setSelectedEraFilter] = useState<string>('all');

  // Filter nodes according to era selection
  const filteredNodes = selectedEraFilter === 'all'
    ? nodes
    : nodes.filter((n) => n.era === selectedEraFilter);

  // Group into Theatre and Cinema nodes sorted chronologically
  const theatreNodes = filteredNodes
    .filter((n) => n.domain === 'teatro' || n.domain === 'ibrido')
    .sort((a, b) => a.yearStart - b.yearStart);

  const cinemaNodes = filteredNodes
    .filter((n) => n.domain === 'cinema' || n.domain === 'ibrido')
    .sort((a, b) => a.yearStart - b.yearStart);

  return (
    <div className="w-full bg-stone-950 text-stone-100 min-h-[calc(100vh-140px)] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Intro Banner */}
        <div className="border-b border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              <ArrowDownUp className="w-3.5 h-3.5" />
              <span>Cronologia Comparata Sincrona</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-100">
              Il Dialogo tra Scena e Schermo nel Tempo
            </h2>
            <p className="text-sm text-stone-400 max-w-2xl mt-1">
              Esplora l'evoluzione parallela: nella corsia superiore le rivoluzioni dello spazio teatrale; nella corsia inferiore le invenzioni del linguaggio cinematografico.
            </p>
          </div>

          {/* Quick Era Filter Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedEraFilter('all')}
              className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                selectedEraFilter === 'all'
                  ? 'bg-amber-400 text-stone-950 font-semibold'
                  : 'bg-stone-900 text-stone-400 hover:text-stone-200'
              }`}
            >
              Tutte le epoche
            </button>
            {ERAS.map((era) => (
              <button
                key={era.key}
                onClick={() => setSelectedEraFilter(era.key)}
                className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                  selectedEraFilter === era.key
                    ? 'bg-amber-400 text-stone-950 font-semibold'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200'
                }`}
              >
                {era.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Swimlane Container */}
        <div className="space-y-12">
          
          {/* TOP SWIMLANE: TEATRO */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-200">
                  Teatro & Drammaturgia dello Spazio
                </h3>
              </div>
              <span className="text-xs text-stone-500 font-sans">
                {theatreNodes.length} tappe storiche
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {theatreNodes.map((node) => (
                <div
                  key={`th-${node.id}`}
                  onClick={() => onSelectNode(node)}
                  className="group relative bg-stone-900/80 hover:bg-stone-900 border border-stone-800 hover:border-amber-500/80 rounded-lg p-4 transition-all duration-200 cursor-pointer shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-amber-400 font-medium mb-1.5">
                      <span className="font-mono tabular-nums">{node.yearLabel}</span>
                      <span className="text-[11px] text-stone-400">{node.location.split('(')[0]}</span>
                    </div>

                    <h4 className="font-serif text-base font-semibold text-stone-100 group-hover:text-amber-200 transition-colors">
                      {node.label}
                    </h4>

                    <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                      {node.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-stone-500">
                      {node.connections.length} correlazioni
                    </span>
                    <span className="text-amber-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-medium">
                      <span>Approfondisci</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CHRONOLOGICAL DIVIDER AXIS */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-dashed border-stone-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-stone-950 px-4 text-xs font-serif italic text-amber-400/90 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Linee d'Intersezione & Osmosi tra Scena e Schermo
              </span>
            </div>
          </div>

          {/* BOTTOM SWIMLANE: CINEMA */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-sky-400" />
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-sky-200">
                  Cinema & Grammatica dell'Inquadratura
                </h3>
              </div>
              <span className="text-xs text-stone-500 font-sans">
                {cinemaNodes.length} tappe storiche
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cinemaNodes.map((node) => (
                <div
                  key={`ci-${node.id}`}
                  onClick={() => onSelectNode(node)}
                  className="group relative bg-stone-900/80 hover:bg-stone-900 border border-stone-800 hover:border-sky-400/80 rounded-lg p-4 transition-all duration-200 cursor-pointer shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-sky-400 font-medium mb-1.5">
                      <span className="font-mono tabular-nums">{node.yearLabel}</span>
                      <span className="text-[11px] text-stone-400">{node.location.split('(')[0]}</span>
                    </div>

                    <h4 className="font-serif text-base font-semibold text-stone-100 group-hover:text-sky-200 transition-colors">
                      {node.label}
                    </h4>

                    <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                      {node.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-stone-500">
                      {node.connections.length} correlazioni
                    </span>
                    <span className="text-sky-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-medium">
                      <span>Approfondisci</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
