import React from 'react';
import { Domain, EraKey } from '../types';
import { ERAS } from '../data/miseEnSceneData';
import { Search, X, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDomain: Domain | 'all';
  onDomainChange: (d: Domain | 'all') => void;
  selectedEra: EraKey | 'all';
  onEraChange: (era: EraKey | 'all') => void;
  visibleCount: number;
  totalCount: number;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedDomain,
  onDomainChange,
  selectedEra,
  onEraChange,
  visibleCount,
  totalCount,
  onResetFilters,
  hasActiveFilters
}) => {
  return (
    <div className="bg-stone-900/90 border-b border-stone-800 text-stone-200 px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
        
        {/* Search input & Domain Segmented Control */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          
          {/* Search bar */}
          <div className="relative min-w-[220px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cerca autore, concetto, luogo, opera..."
              className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-stone-950/80 border border-stone-700/80 rounded-md text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200 cursor-pointer"
                aria-label="Pulisci ricerca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Domain selector */}
          <div className="flex items-center p-0.5 bg-stone-950/80 border border-stone-800 rounded-md shrink-0">
            <button
              onClick={() => onDomainChange('all')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                selectedDomain === 'all'
                  ? 'bg-stone-800 text-stone-100 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Tutti ({totalCount})
            </button>
            <button
              onClick={() => onDomainChange('teatro')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                selectedDomain === 'teatro'
                  ? 'bg-amber-900/80 text-amber-200 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Teatro
            </button>
            <button
              onClick={() => onDomainChange('cinema')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                selectedDomain === 'cinema'
                  ? 'bg-sky-900/80 text-sky-200 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Cinema
            </button>
            <button
              onClick={() => onDomainChange('ibrido')}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                selectedDomain === 'ibrido'
                  ? 'bg-violet-900/80 text-violet-200 shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Transizione / Ibrido
            </button>
          </div>
        </div>

        {/* Era selector and Active filters indicator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          <span className="text-xs text-stone-400 whitespace-nowrap hidden sm:inline">Epoca:</span>
          
          <button
            onClick={() => onEraChange('all')}
            className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedEra === 'all'
                ? 'bg-stone-700 text-white font-medium'
                : 'bg-stone-950/60 text-stone-400 hover:text-stone-200 hover:bg-stone-800/80'
            }`}
          >
            Tutte le epoche
          </button>

          {ERAS.map((era) => {
            const isActive = selectedEra === era.key;
            return (
              <button
                key={era.key}
                onClick={() => onEraChange(era.key)}
                title={`${era.label} (${era.timeframe})`}
                className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-xs'
                    : 'bg-stone-950/60 text-stone-400 hover:text-stone-200 hover:bg-stone-800/80'
                }`}
              >
                <span>{era.label}</span>
              </button>
            );
          })}

          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 px-2.5 py-1 text-xs text-amber-300 hover:text-amber-200 bg-amber-950/40 border border-amber-800/60 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ml-1"
              title="Azzera tutti i filtri"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Azzera ({visibleCount}/{totalCount})</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
