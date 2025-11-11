import { BookOpen, Play, Brain, Info } from 'lucide-react';

interface HomePageProps {
  onStartLearning: () => void;
  onStartQuiz: () => void;
  onShowAbout: () => void;
}

export function HomePage({ onStartLearning, onStartQuiz, onShowAbout }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 overflow-hidden relative">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-pulse"
            style={{
              width: Math.random() * 20 + 10 + 'px',
              height: Math.random() * 20 + 10 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideup {
          animation: slideUp 0.8s ease forwards;
        }
        .animate-slideright {
          animation: slideRight 0.8s ease forwards;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="animate-slideup" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="text-yellow-300">
                  <BookOpen className="inline-block mr-4 mb-2" size={60} />
                </span>
                Belajar Tag HTML Dasar
              </h1>
            </div>

            <p
              className="text-lg lg:text-xl leading-relaxed opacity-95 animate-slideup"
              style={{ animationDelay: '0.4s' }}
            >
              Media pembelajaran interaktif untuk memahami struktur dan fungsi tag HTML secara menyenangkan dan praktis bagi siswa SMK Rekayasa Perangkat Lunak.
            </p>

            <p
              className="text-sm lg:text-base opacity-85 animate-slideup"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="font-semibold">Disusun oleh:</span> Guru RPL SMKN 9 Malang Web Development.
            </p>

            <div className="space-y-4 pt-4 animate-slideup" style={{ animationDelay: '0.8s' }}>
              <div className='flex justify-center'>
              <button
                onClick={onStartLearning}
                className="w-full lg:w-auto group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Play size={24} />
                Mulai Belajar
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </button>
              </div>

              <div className="flex gap-4 flex-col lg:flex-row">
                <button
                  onClick={onShowAbout}
                  className="flex-1 px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Info size={20} />
                  Tentang Materi
                </button>
                <button
                  onClick={onStartQuiz}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Brain size={20} />
                  Langsung ke Quiz
                </button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex justify-center items-center animate-slideright" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              alt="Web Development"
              style={{ width: '528px', height: 'auto' }}
              className="rounded-2xl drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-4 text-sm">
        © 2025 SMKN 9 MALANG RPL Interactive Learning | HTML Dasar
      </div>
    </div>
  );
}
