import React from 'react';
import { X, BookOpen, Compass, Film, Network, History, Sparkles } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80 shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <h3 className="font-serif text-lg font-semibold text-stone-100">
              Guida Storica & Teorica alla Messinscena
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-stone-300 leading-relaxed scrollbar-thin">
          
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Origine del Concetto & Radici Storiche
            </span>
            <h4 className="font-serif text-2xl font-semibold text-stone-100 mb-2">
              Dall'Antichità Classica e i Misteri Medievali alla Regia Moderna
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <p>
                <strong>Il Teatro Greco e Romano:</strong> Già nel V sec. a.C., la messinscena si definisce come evento comunitario sacro e civico. Lo spazio greco ruota attorno all'<em>orchestra</em> per il Coro e al declivio naturale della collina, mentre il teatro romano chiude la struttura in un edificio murario monumentale dominato dalla <em>scaenae frons</em> a colonne e da ingegnose macchine sceniche (la gru <em>mechané</em> per il deus ex machina e l'<em>ekkyklema</em> per rivelare ciò che accadeva fuori scena).
              </p>
              <p>
                <strong>I Misteri Medievali e la Scena Simultanea:</strong> Nel Medioevo (dal X al XVI sec.), il teatro rinasce dal tropo liturgico (<em>Quem quaeritis?</em>) e dilaga nelle piazze con i monumentali <em>Misteri</em> e le <em>Passioni</em>. La concezione dello spazio è antitetica alla scatola prospettica chiusa: è la <strong>scena simultanea dei luoghi deputati (mansiones)</strong>, dove Paradiso, Terra e la spaventosa "Bocca dell'Inferno" convivono affiancati in un unico sguardo, oppure sfilano su carri mobili (<em>Pageants</em>), precorrendo la polifonia spaziale moderna.
              </p>
              <p>
                <strong>La nascita della "Mise en scène" moderna:</strong> Nell'Ottocento, il termine francese <em>mise en scène</em> passa da dicitura logistica dei copioni di scena ad arte sovrana con i <strong>Meininger</strong> (1874) e il <strong>Théâtre-Libre</strong> di André Antoine (1887), trasformando il regista (<em>metteur en scène</em>) nell'architetto che fonde corpi, spazio, luce e testo in un'opera organica unitaria.
              </p>
            </div>
          </div>

          <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Film className="w-4 h-4" />
              La Trasposizione al Cinema: Da Méliès ai Cahiers du Cinéma
            </span>
            <p className="text-xs sm:text-sm text-stone-300">
              Nel cinema, il termine <em>mise en scène</em> viene importato prima come trasposizione meccanica del proscenio teatrale (Georges Méliès). Ma con Griffith, Murnau, Renoir e Orson Welles, la messinscena cinematografica scopre la sua specificità: non solo ciò che sta davanti alla cinepresa (attori, costumi, scenografia), ma <strong>la relazione stessa tra la cinepresa e il mondo</strong> (l'angolatura, la profondità di campo, la luce, la durata dell'inquadratura e il movimento di macchina). Negli anni Cinquanta, i critici francesi di <em>Cahiers du Cinéma</em> e André Bazin eleveranno la messinscena a criterio supremo della "politica degli autori".
            </p>
          </div>

          {/* How to explore the applet */}
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-2">
              Come Esplorare l'Applicazione
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800/80">
                <div className="flex items-center gap-2 font-semibold text-amber-300 mb-1">
                  <Network className="w-4 h-4" />
                  <span>1. Rete dei Nodi</span>
                </div>
                <p className="text-stone-400">
                  Visualizza le linee di filiazione, le rotture stilistiche e i passaggi diretti tra innovazioni teatrali e tecniche cinematografiche. Usa zoom e trascina per esplorare.
                </p>
              </div>

              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800/80">
                <div className="flex items-center gap-2 font-semibold text-sky-300 mb-1">
                  <History className="w-4 h-4" />
                  <span>2. Linea del Tempo</span>
                </div>
                <p className="text-stone-400">
                  Due corsie sincrone (Teatro sopra, Cinema sotto) per comprendere i momenti esatti in cui le due arti si sono influenzate o superate a vicenda.
                </p>
              </div>

              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800/80">
                <div className="flex items-center gap-2 font-semibold text-emerald-300 mb-1">
                  <Compass className="w-4 h-4" />
                  <span>3. Aree d'Influenza</span>
                </div>
                <p className="text-stone-400">
                  L'atlante delle nazioni e delle grandi capitali sceniche (Parigi, Berlino, Mosca, Milano, Hollywood, Kyoto, Stoccolma).
                </p>
              </div>

              <div className="bg-stone-950/60 p-3 rounded-lg border border-stone-800/80">
                <div className="flex items-center gap-2 font-semibold text-violet-300 mb-1">
                  <Film className="w-4 h-4" />
                  <span>4. Tavole Iconografiche</span>
                </div>
                <p className="text-stone-400">
                  I sei pilastri tecnici e filosofici della messinscena a confronto con diagrammi interattivi (luce a 3 punti, aspect ratio, campo visivo).
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
            <span className="flex items-center gap-1.5 text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dati dimostrativi accademici incorporati</span>
            </span>
            <span>Pronto per l'esplorazione</span>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-800 bg-stone-950/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors cursor-pointer"
          >
            Inizia l'Esplorazione
          </button>
        </div>
      </div>
    </div>
  );
};
