import { Trophy, RotateCcw, Home, User, Fingerprint } from 'lucide-react';

interface QuizResultProps {
  nama: string;
  nisn: string;
  score: number;
  onRetakeQuiz: () => void;
  onHome: () => void;
}

export function QuizResult({ nama, nisn, score, onRetakeQuiz, onHome }: QuizResultProps) {
  const message = score >= 80
    ? "🎉 Hebat! Kamu sudah memahami dasar HTML dengan baik 👏"
    : "💪 Ayo coba lagi, dan pelajari kembali materi HTML Dasar.";

  const motivationExtra = score >= 80
    ? "Pertahankan semangat belajarmu dan terus kembangkan keterampilanmu dalam web development. Jangan lupa untuk mempelajari materi HTML yang lebih lanjut!"
    : "Jangan menyerah! Coba baca kembali materi yang belum Anda pahami, kemudian ulangi quiz ini untuk mendapatkan hasil yang lebih baik.";

  const scoreColor = score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600';
  const bgColor = score >= 80 ? 'from-green-100 to-emerald-100' : score >= 60 ? 'from-yellow-100 to-amber-100' : 'from-red-100 to-orange-100';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColor} py-12 px-4 flex items-center justify-center`}>
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 animate-fadeIn">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-full mb-6 animate-bounce">
              <Trophy className="text-white" size={48} />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Hasil Quiz</h2>
            <p className="text-gray-600">Evaluasi pembelajaran Anda telah selesai</p>
          </div>

          {/* Student Info */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-semibold">Nama Siswa</p>
                  <p className="text-gray-800 font-bold text-lg">{nama}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-500 p-3 rounded-full">
                  <Fingerprint className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-semibold">NISN</p>
                  <p className="text-gray-800 font-bold text-lg">{nisn}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Score Display */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm mb-4 font-semibold">SKOR AKHIR</p>
            <div className={`text-7xl font-bold ${scoreColor} animate-scale-up mb-2`}>
              {score}
            </div>
            <p className="text-gray-600 font-semibold">dari 100</p>
          </div>

          {/* Message */}
          <div className={`p-6 rounded-xl mb-8 border-2 ${
            score >= 80
              ? 'bg-green-50 border-green-300'
              : score >= 60
              ? 'bg-yellow-50 border-yellow-300'
              : 'bg-red-50 border-red-300'
          }`}>
            <p className={`text-lg font-bold mb-3 ${
              score >= 80
                ? 'text-green-700'
                : score >= 60
                ? 'text-yellow-700'
                : 'text-red-700'
            }`}>
              {message}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {motivationExtra}
            </p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 text-sm font-semibold">Total Soal</p>
              <p className="text-2xl font-bold text-gray-800">10</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 text-sm font-semibold">Jawaban Benar</p>
              <p className="text-2xl font-bold text-green-600">{Math.round(score / 10)}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-4">
            <button
              onClick={onHome}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              <Home size={24} />
              Kembali ke Home
            </button>
            <button
              onClick={onRetakeQuiz}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <RotateCcw size={24} />
              Ulangi Quiz
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
        .animate-scale-up {
          animation: scaleUp 0.5s ease;
        }
      `}</style>
    </div>
  );
}
