# Quick Start - Media Pembelajaran HTML Dasar

## 🚀 Mulai Menggunakan Aplikasi

### Akses Aplikasi
Aplikasi ini sudah siap digunakan! Silakan buka di browser atau jalankan:

```bash
npm run dev
```

Kemudian buka: `http://localhost:5173`

### Alur Pertama Kali
1. **Halaman Awal** - Lihat overview aplikasi
2. **Klik "Mulai Belajar"** - Masuk ke 4 materi
3. **Pelajari setiap materi** - Gunakan tombol "Lanjut"
4. **Klik "Ke Quiz Evaluasi"** - Setelah materi 4
5. **Isi Form** - Input Nama & NISN
6. **Jawab Quiz** - 10 soal pilihan ganda
7. **Lihat Hasil** - Dapatkan skor dan feedback

### Alternatif Cepat
- Klik **"Langsung ke Quiz"** di halaman awal untuk skip materi
- Klik **"Tentang Materi"** untuk informasi lengkap

---

## 📂 Struktur File

```
src/
├── App.tsx                 # Main application
├── components/
│   ├── HomePage.tsx        # Halaman awal
│   ├── MateriPage.tsx      # Halaman materi
│   ├── QuizIdentity.tsx    # Form identitas
│   ├── QuizQuestion.tsx    # Soal quiz
│   ├── QuizResult.tsx      # Hasil quiz
│   └── AboutModal.tsx      # Modal info
└── data/
    └── quizData.ts         # Data soal & materi
```

---

## 🎯 Fitur Utama

| Halaman | Deskripsi |
|---------|-----------|
| **Home** | Pembuka dengan 3 tombol navigasi |
| **Materi** | 4 bagian pembelajaran dengan tabel & kode |
| **Quiz** | 10 soal dengan feedback instan |
| **Hasil** | Skor dan pesan motivasi |

---

## 💡 Tips Penggunaan

### Untuk Siswa
✅ Pelajari materi dengan teliti
✅ Pahami setiap contoh kode
✅ Ulangi materi jika belum paham
✅ Jawab quiz dengan percaya diri
✅ Baca penjelasan setiap feedback

### Untuk Guru
✅ Bagikan link ke siswa
✅ Minta siswa belajar mandiri
✅ Diskusikan hasil quiz di kelas
✅ Gunakan sebagai pre-test/post-test

---

## 🎨 Customization

### Mengubah Materi
Edit `/src/data/quizData.ts`:
- Tambah/edit `materiSections` untuk materi baru
- Update `quizQuestions` untuk soal baru

### Mengubah Warna
Edit komponen dan ubah class Tailwind:
- Primary: `from-blue-500 to-purple-600`
- Success: `from-green-500 to-emerald-600`

### Mengubah Font
Sudah pakai Poppins dari Google Fonts. Ubah di `index.css` untuk font lain.

---

## 📱 Responsive

Aplikasi sudah fully responsive:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px+)
- ✅ Tablet (768px+)
- ✅ Mobile (320px+)

---

## 🔧 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

---

## 📊 File Stats

- **Total Components**: 6
- **Total Soal**: 10
- **Total Materi**: 4
- **Build Size**: ~183KB (56KB gzip)

---

## ✨ Fitur Spesial

🎵 **Sound Effects** - Klik tombol mengeluarkan sound lembut
✨ **Animasi** - Smooth transitions antar halaman
📊 **Progress Bar** - Visual feedback progress quiz
💬 **Feedback Instan** - Jawaban benar/salah dengan penjelasan
🎯 **Responsive** - Optimal di semua device

---

## 🐛 Troubleshooting

### Halaman blank?
→ Refresh halaman atau clear browser cache

### Sound tidak muncul?
→ Periksa volume browser dan izin audio

### Animasi lambat?
→ Disable animasi browser atau gunakan browser terbaru

### Quiz tidak tersimpan?
→ Normal! Data quiz tidak persisten (by design)

---

## 📞 Support

Hubungi guru RPL untuk:
- Pertanyaan tentang materi
- Feedback tentang aplikasi
- Request fitur tambahan

---

**Selamat Belajar! 🚀**

© 2025 SMKN 9 MALANG RPL Interactive Learning
