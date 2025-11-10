import { User, Fingerprint, Play, Home } from 'lucide-react';
import { useState } from 'react';

interface QuizIdentityProps {
  onSubmit: (nama: string, nisn: string) => void;
  onHome: () => void;
}

export function QuizIdentity({ onSubmit, onHome }: QuizIdentityProps) {
  const [nama, setNama] = useState('');
  const [nisn, setNisn] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama.trim() || !nisn.trim()) {
      setError('Mohon lengkapi nama dan NISN terlebih dahulu');
      return;
    }

    setError('');
    onSubmit(nama, nisn);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-red-200 py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-br from-orange-400 to-red-500 p-4 rounded-full mb-4">
              <User className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Identitas Siswa</h2>
            <p className="text-gray-600 text-sm mt-2">Silakan isi identitas Anda sebelum memulai quiz</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nama Input */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                <User size={20} className="text-blue-600" />
                Nama Lengkap
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama lengkap Anda"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 font-poppins"
              />
            </div>

            {/* NISN Input */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                <Fingerprint size={20} className="text-blue-600" />
                NISN (Nomor Induk Siswa Nasional)
              </label>
              <input
                type="text"
                value={nisn}
                onChange={(e) => setNisn(e.target.value)}
                placeholder="Masukkan NISN Anda (10 digit)"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 font-poppins"
                maxLength={20}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm animate-pulse">
                ⚠️ {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onHome}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                <Home size={20} />
                Home
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Play size={20} />
                Mulai Quiz
              </button>
            </div>
          </form>
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
      `}</style>
    </div>
  );
}
