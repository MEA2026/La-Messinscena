import React, { useState } from 'react';
import { SceneNode } from '../types';
import { REGIONS } from '../data/miseEnSceneData';
import { Compass, Globe, Sparkles, Building2, ArrowRight } from 'lucide-react';

interface AtlasViewProps {
  nodes: SceneNode[];
  onSelectNode: (node: SceneNode) => void;
}

export const AtlasView: React.FC<AtlasViewProps> = ({ nodes, onSelectNode }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(REGIONS[0].id);

  const currentRegion = REGIONS.find((r) => r.id === selectedRegionId) || REGIONS[0];

  // Nodes belonging to this region
  const regionNodes = nodes.filter((n) => currentRegion.nodeIds.includes(n.id));

  return (
    <div className="w-full bg-stone-950 text-stone-100 min-h-[calc(100vh-140px)] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="border-b border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Atlante delle Aree d'Influenza</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-100">
              Poli Geografici ed Epicentri della Messinscena
            </h2>
            <p className="text-sm text-stone-400 max-w-2xl mt-1">
              Dalla Parigi della Comédie-Française alla Hollywood dello Studio System: come i contesti culturali, politici e architettonici hanno plasmato le poetiche dello spazio.
            </p>
          </div>
        </div>

        {/* Region Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {REGIONS.map((region) => {
            const isSelected = region.id === selectedRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 font-semibold border-amber-300 shadow-md'
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                }`}
              >
                <span className="font-mono text-xs">{region.flagName}</span>
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Region Detailed Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Cols: Historical Essay & Heritage */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Country Banner Card */}
            <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between text-xs text-amber-400 font-medium mb-2">
                <span className="flex items-center gap-1.5 uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5" />
                  {currentRegion.continent}
                </span>
                <span className="text-stone-400">{currentRegion.nodeIds.length} figure e concetti chiave</span>
              </div>

              <h3 className="font-serif text-3xl font-semibold text-stone-100 mb-4">
                {currentRegion.name}
              </h3>

              {/* Dual Heritage Cards: Theatre vs Cinema */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                
                {/* Theatre Legacy */}
                <div className="bg-stone-950/60 border border-amber-900/40 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Eredità Teatrale</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {currentRegion.theatreLegacy}
                  </p>
                </div>

                {/* Cinema Legacy */}
                <div className="bg-stone-950/60 border border-sky-900/40 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>Eredità Cinematografica</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {currentRegion.cinemaLegacy}
                  </p>
                </div>
              </div>

              {/* Key Innovations */}
              <div className="mt-6 pt-5 border-t border-stone-800">
                <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold block mb-3">
                  Riforme & Invenzioni Cardine
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentRegion.keyInnovations.map((innov, idx) => (
                    <div
                      key={idx}
                      className="bg-stone-900 border border-stone-800/80 rounded-md p-2.5 text-xs text-stone-200 flex items-start gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{innov}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prominent Epicenters */}
              <div className="mt-5 pt-4 border-t border-stone-800/80 flex items-center gap-2 text-xs text-stone-400 flex-wrap">
                <Building2 className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="font-medium text-stone-300">Centri ed Istituzioni di riferimento:</span>
                <span>{currentRegion.prominentCentres.join(' · ')}</span>
              </div>
            </div>
          </div>

          {/* Right Col: Associated Nodes in this Region */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-stone-200 flex items-center justify-between">
              <span>Nodi dell'Archivio</span>
              <span className="text-xs font-sans text-stone-500 font-normal">
                {regionNodes.length} schede
              </span>
            </h4>

            <div className="space-y-3">
              {regionNodes.map((node) => (
                <div
                  key={node.id}
                  onClick={() => onSelectNode(node)}
                  className="group bg-stone-900/90 hover:bg-stone-900 border border-stone-800 hover:border-amber-400/80 rounded-lg p-3.5 transition-all cursor-pointer shadow-sm"
                >
                  <div className="flex items-center justify-between text-xs text-amber-400 font-medium mb-1">
                    <span className="text-[11px] uppercase tracking-wider">
                      {node.domain} · {node.category}
                    </span>
                    <span className="font-mono">{node.yearLabel}</span>
                  </div>

                  <h5 className="font-serif text-base font-semibold text-stone-100 group-hover:text-amber-200 transition-colors">
                    {node.label}
                  </h5>

                  <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                    {node.shortDescription}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-500 group-hover:text-amber-300 transition-colors">
                    <span>{node.keyWorks.length} opere salienti</span>
                    <span className="flex items-center gap-1 font-medium">
                      <span>Apri scheda</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
