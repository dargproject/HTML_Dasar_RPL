import { ChevronLeft, ChevronRight, Home, BookOpen } from 'lucide-react';

interface Table {
  tag: string;
  function: string;
  example: string;
}

interface MateriSection {
  id: number;
  title: string;
  content: string;
  table: Table[];
  code: string;
}

interface MateriPageProps {
  currentSection: number;
  section: MateriSection;
  onPrevious: () => void;
  onNext: () => void;
  onHome: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

export function MateriPage({
  currentSection,
  section,
  onPrevious,
  onNext,
  onHome,
  canGoNext,
  canGoPrev
}: MateriPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="text-blue-600" size={40} />
            <div>
              <h2 className="text-4xl font-bold text-blue-600">{section.title}</h2>
              <p className="text-gray-600">Materi {currentSection} dari 4</p>
            </div>
          </div>

          {/* Content */}
          <div className="mb-8 text-gray-700 leading-relaxed">
            {/* <p className="mb-6 text-lg">{section.content}</p> */}
          <div className="mb-6 text-lg"
          dangerouslySetInnerHTML={{ __html: section.content }}
          ></div>

            {/* Table */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tag</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fungsi</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Contoh</th>
                  </tr>
                </thead>
                <tbody>
                  {section.table.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} style={{ transition: 'background-color 0.3s' }}>
                      <td className="border border-gray-300 px-4 py-3">
                        <code className="bg-gray-200 px-2 py-1 rounded text-red-600 font-mono">{row.tag}</code>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">{row.function}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-mono text-sm">{row.example}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Code Block */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contoh Kode:</h3>
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto border-l-4 border-blue-500 font-mono text-sm leading-relaxed">
                <code>{section.code}</code>
              </pre>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between pt-8 border-t-2 border-gray-200">
            <button
              onClick={onHome}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              <Home size={20} />
              Kembali ke Home
            </button>

            <div className="flex gap-4">
              <button
                onClick={onPrevious}
                disabled={!canGoPrev}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  canGoPrev
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={20} />
                Sebelumnya
              </button>

              {canGoNext ? (
                <button
                  onClick={onNext}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Lanjut
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  onClick={onNext}
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Ke Quiz Evaluasi</span>
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
        tr:hover {
          background-color: #e3f2fd !important;
        }
      `}</style>
    </div>
  );
}
