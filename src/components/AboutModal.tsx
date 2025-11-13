import { X, BookOpen, Clock, Zap, CheckCircle } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideDown">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen size={32} />
            <h2 className="text-2xl font-bold">Tentang Materi</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all duration-300"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Introduction */}
          <div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Media pembelajaran interaktif ini dirancang khusus untuk siswa SMK yang ingin mempelajari dasar-dasar HTML dengan cara yang menyenangkan dan mudah dipahami.
            </p>
          </div>

          {/* Learning Goals */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Zap className="text-yellow-500" />
              Apa yang akan kamu pelajari:
            </h3>
            <div className="space-y-3">
              {[
                "Tag HTML Dasar (html, head, title, body)",
                "Elemen pada Tag Body (heading, paragraf, link, dll)",
                "Tag HTML untuk Formatting (bold, italic, underline)",
                "Tag Pengaturan Huruf dan Gambar (sub, sup, img)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg text-center border-2 border-blue-300">
              <Clock className="text-blue-600 mx-auto mb-3" size={32} />
              <p className="text-gray-600 text-sm font-semibold mb-1">Durasi</p>
              <p className="text-gray-800 font-bold text-lg">30-45 Menit</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg text-center border-2 border-green-300">
              <Zap className="text-green-600 mx-auto mb-3" size={32} />
              <p className="text-gray-600 text-sm font-semibold mb-1">Level</p>
              <p className="text-gray-800 font-bold text-lg">Pemula</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg text-center border-2 border-purple-300">
              <CheckCircle className="text-purple-600 mx-auto mb-3" size={32} />
              <p className="text-gray-600 text-sm font-semibold mb-1">Evaluasi</p>
              <p className="text-gray-800 font-bold text-lg">10 Soal MCQ</p>
            </div>
          </div>

          {/* Structure */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BookOpen className="text-blue-500" />
              Struktur Pembelajaran:
            </h3>
            <div className="space-y-4">
              {[
                { num: 1, title: "Halaman Awal", desc: "Pengenalan dan motivasi belajar HTML" },
                { num: 2, title: "4 Materi", desc: "Pembelajaran interaktif dengan tabel dan contoh kode" },
                { num: 3, title: "Quiz", desc: "10 soal evaluasi dengan feedback penjelasan" },
                { num: 4, title: "Hasil", desc: "Skor dan motivasi berdasarkan performa kamu" }
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {item.num}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-800 leading-relaxed">
              <span className="font-bold text-yellow-700">💡 Tips:</span> Pastikan Anda membaca setiap materi dengan seksama dan memahami setiap tag HTML sebelum mengerjakan quiz. Jika ada yang kurang jelas, jangan ragu untuk membaca kembali materinya!
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Mengerti, Mulai Belajar
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease;
        }
      `}</style>
    </div>
  );
}
