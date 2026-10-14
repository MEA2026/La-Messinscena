import React, { useState, useMemo } from 'react';
import { SceneNode } from '../types';
import { Search, Bookmark, BookmarkCheck, ArrowRight, BookOpen, Filter } from 'lucide-react';

interface GlossaryViewProps {
  nodes: SceneNode[];
  onSelectNode: (node: SceneNode) => void;
  savedNodeIds: string[];
  onToggleBookmark: (id: string) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  nodes,
  onSelectNode,
  savedNodeIds,
  onToggleBookmark
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [filterSavedOnly, setFilterSavedOnly] = useState<boolean>(false);

  // Alphabet list
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Filtered nodes
  const filteredNodes = useMemo(() => {
    return nodes
      .filter((n) => {
        if (filterSavedOnly && !savedNodeIds.includes(n.id)) return false;
        if (selectedLetter !== 'all' && !n.label.toUpperCase().startsWith(selectedLetter)) {
          return false;
        }
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          return (
            n.label.toLowerCase().includes(q) ||
            n.subtitle.toLowerCase().includes(q) ||
            n.shortDescription.toLowerCase().includes(q) ||
            n.location.toLowerCase().includes(q)
          );
        }
        return true;
      })
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [nodes, filterSavedOnly, savedNodeIds, selectedLetter, searchTerm]);

  return (
    <div className="w-full bg-stone-950 text-stone-100 min-h-[calc(100vh-140px)] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-stone-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Glossario & Archivio Generale</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-100">
              Dizionario Storico della Messinscena
            </h2>
            <p className="text-sm text-stone-400 max-w-2xl mt-1">
              Consultazione enciclopedica di tutti i concetti, registi, movimenti e dispositivi scenici, con possibilità di salvare i tuoi segnalibri per studio o approfondimento.
            </p>
          </div>

          {/* Bookmarks Toggle button */}
          <button
            onClick={() => setFilterSavedOnly(!filterSavedOnly)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-colors cursor-pointer shrink-0 ${
              filterSavedOnly
                ? 'bg-amber-400 text-stone-950 border-amber-300 font-semibold'
                : 'bg-stone-900 text-stone-300 border-stone-800 hover:text-white hover:border-stone-700'
            }`}
          >
            {filterSavedOnly ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            <span>I Miei Segnalibri ({savedNodeIds.length})</span>
          </button>
        </div>

        {/* Search & Alphabet Filter Strip */}
        <div className="space-y-4 bg-stone-900/60 border border-stone-800/80 p-4 rounded-xl">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cerca termine nel glossario..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-stone-950 border border-stone-700/80 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Letters A-Z */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedLetter('all')}
              className={`px-2 py-1 text-xs rounded transition-colors cursor-pointer shrink-0 ${
                selectedLetter === 'all'
                  ? 'bg-amber-400 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-100 bg-stone-950/60'
              }`}
            >
              Tutti
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`w-7 h-7 text-xs rounded font-mono transition-colors cursor-pointer shrink-0 flex items-center justify-center ${
                  selectedLetter === letter
                    ? 'bg-amber-400 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-stone-100 bg-stone-950/60'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-stone-400">
          <span>Trovati {filteredNodes.length} elementi nell'enciclopedia</span>
          {filterSavedOnly && (
            <span className="text-amber-400">Visualizzazione filtrata sui segnalibri personali</span>
          )}
        </div>

        {/* List of Glossary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNodes.map((node) => {
            const isSaved = savedNodeIds.includes(node.id);
            return (
              <div
                key={node.id}
                onClick={() => onSelectNode(node)}
                className="group bg-stone-900/90 hover:bg-stone-900 border border-stone-800 hover:border-amber-400/80 rounded-xl p-5 transition-all duration-200 cursor-pointer shadow-md flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-amber-400 font-medium mb-1.5 pr-8">
                    <span className="text-[11px] uppercase tracking-wider font-semibold">
                      {node.domain} · {node.category}
                    </span>
                    <span className="font-mono">{node.yearLabel}</span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-stone-100 group-hover:text-amber-200 transition-colors">
                    {node.label}
                  </h3>

                  <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                    {node.subtitle}
                  </p>

                  <p className="text-xs text-stone-300 mt-3 line-clamp-3 leading-relaxed">
                    {node.shortDescription}
                  </p>
                </div>

                {/* Bookmark Toggle Icon */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(node.id);
                  }}
                  className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors cursor-pointer ${
                    isSaved ? 'text-amber-400 bg-amber-950/80' : 'text-stone-500 hover:text-stone-200 bg-stone-950/60'
                  }`}
                  title={isSaved ? 'Rimuovi dai segnalibri' : 'Aggiungi ai segnalibri'}
                >
                  {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                </button>

                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500 group-hover:text-amber-300 transition-colors">
                  <span>{node.keyWorks.length} opere di riferimento</span>
                  <span className="flex items-center gap-1 font-medium">
                    <span>Leggi monografia</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredNodes.length === 0 && (
          <div className="text-center py-16 bg-stone-900/40 rounded-2xl border border-stone-800">
            <Filter className="w-8 h-8 text-stone-500 mx-auto mb-2" />
            <h4 className="font-serif text-lg text-stone-300">Nessuna scheda corrispondente</h4>
            <p className="text-xs text-stone-500 mt-1">
              Prova a reimpostare i filtri di ricerca o la lettera selezionata.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
