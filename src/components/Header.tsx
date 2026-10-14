import React from 'react';
import { ViewMode } from '../types';
import { Network, History, Compass, Film, BookOpen, Info } from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onOpenGuide: () => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  onOpenGuide,
  savedCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        
        {/* Zone 1: Single text element wordmark */}
        <button 
          onClick={() => onViewChange('network')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-amber-100 group-hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 block">
            La Messinscena nel tempo
          </span>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
          <button
            onClick={() => onViewChange('network')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
              currentView === 'network'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'hover:text-stone-100'
            }`}
          >
            <Network className="w-4 h-4" />
            <span>Rete dei Nodi</span>
          </button>

          <button
            onClick={() => onViewChange('timeline')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
              currentView === 'timeline'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'hover:text-stone-100'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Linea del Tempo</span>
          </button>

          <button
            onClick={() => onViewChange('atlas')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
              currentView === 'atlas'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'hover:text-stone-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Aree d'Influenza</span>
          </button>

          <button
            onClick={() => onViewChange('anatomy')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
              currentView === 'anatomy'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'hover:text-stone-100'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Anatomia della Scena</span>
          </button>

          <button
            onClick={() => onViewChange('glossary')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 ${
              currentView === 'glossary'
                ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                : 'hover:text-stone-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Glossario & Schede</span>
            {savedCount > 0 && (
              <span className="text-xs text-amber-400 font-sans font-semibold">
                ({savedCount})
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenGuide}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <Info className="w-4 h-4" />
            <span>Guida all'Opera</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="lg:hidden flex items-center justify-around border-t border-stone-800/80 px-2 py-2 text-xs bg-stone-950/95 overflow-x-auto">
        <button
          onClick={() => onViewChange('network')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
            currentView === 'network' ? 'bg-amber-950/60 text-amber-300 font-medium' : 'text-stone-400'
          }`}
        >
          <Network className="w-3.5 h-3.5" />
          <span>Grafo</span>
        </button>
        <button
          onClick={() => onViewChange('timeline')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
            currentView === 'timeline' ? 'bg-amber-950/60 text-amber-300 font-medium' : 'text-stone-400'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Cronologia</span>
        </button>
        <button
          onClick={() => onViewChange('atlas')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
            currentView === 'atlas' ? 'bg-amber-950/60 text-amber-300 font-medium' : 'text-stone-400'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Atlante</span>
        </button>
        <button
          onClick={() => onViewChange('anatomy')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
            currentView === 'anatomy' ? 'bg-amber-950/60 text-amber-300 font-medium' : 'text-stone-400'
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>Anatomia</span>
        </button>
        <button
          onClick={() => onViewChange('glossary')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
            currentView === 'glossary' ? 'bg-amber-950/60 text-amber-300 font-medium' : 'text-stone-400'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Indice</span>
        </button>
      </div>
    </header>
  );
};
