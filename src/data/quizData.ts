export const quizQuestions = [
  {
    id: 1,
    question: "Aplikasi untuk menuliskan skrip HTML disebut...",
    options: ["A. Web text", "B. Web browser", "C. Web editor", "D. Web server", "E. Web statis"],
    correct: "C. Web editor",
    explanation: "Web editor seperti VSCode, Sublime, atau Notepad++ digunakan untuk menulis dan menyimpan kode HTML. Browser digunakan untuk menampilkan halaman web, bukan menulis kode."
  },
  {
    id: 2,
    question: "Aplikasi di bawah ini yang bukan web browser adalah...",
    options: ["A. Chrome", "B. Mozilla", "C. VSCode", "D. Internet Explorer", "E. Edge"],
    correct: "C. VSCode",
    explanation: "VSCode adalah code editor, bukan browser. Browser seperti Chrome, Mozilla Firefox, Internet Explorer, dan Edge digunakan untuk menampilkan halaman web."
  },
  {
    id: 3,
    question: "Tag HTML untuk teks tebal adalah...",
    options: ["A. <body>", "B. <i>", "C. <b>", "D. <u>", "E. <p>"],
    correct: "C. <b>",
    explanation: "Tag <b> menebalkan teks tanpa menambah makna semantik khusus. Tag <i> untuk teks miring, <u> untuk teks bergaris bawah, dan <p> untuk paragraf."
  },
  {
    id: 4,
    question: "Tag HTML untuk membuat judul adalah...",
    options: ["A. <h1>", "B. <header>", "C. <body>", "D. <title>", "E. <hr>"],
    correct: "A. <h1>",
    explanation: "Tag heading <h1> hingga <h6> digunakan untuk membuat judul dengan tingkat kepentingan berbeda. <h1> adalah judul utama terbesar, <h6> adalah judul terkecil."
  },
  {
    id: 5,
    question: "Tag HTML untuk membuat baris baru adalah...",
    options: ["A. <hr>", "B. <br>", "C. <b>", "D. <p>", "E. <h2>"],
    correct: "B. <br>",
    explanation: "<br> memaksa teks ke baris baru tanpa membuat paragraf baru. Tag <p> membuat paragraf, dan <hr> membuat garis horizontal pemisah."
  },
  {
    id: 6,
    question: "Tag HTML untuk menampilkan gambar adalah...",
    options: ["A. <body>", "B. <header>", "C. <img>", "D. <font>", "E. <title>"],
    correct: "C. <img>",
    explanation: "<img> digunakan untuk menyisipkan gambar ke dalam halaman web. Atribut src menentukan lokasi file gambar, dan alt memberikan deskripsi alternatif."
  },
  {
    id: 7,
    question: "Potongan <body> <b>selamat belajar html</b></body> menghasilkan...",
    options: [
      "A. selamat belajar html (normal)",
      "B. selamat belajar html (tebal)",
      "C. selamat belajar html (miring)",
      "D. selamat belajar html (bergaris bawah)",
      "E. selamat belajar html (besar)"
    ],
    correct: "B. selamat belajar html (tebal)",
    explanation: "Tag <b> membuat teks di antara tag menjadi tebal. Teks 'selamat belajar html' akan ditampilkan dengan format tebal di browser."
  },
  {
    id: 8,
    question: "Potongan <h1> Belajar html </h1> menghasilkan...",
    options: [
      "A. Belajar html (kecil)",
      "B. Belajar html (normal)",
      "C. Belajar html (besar/heading)",
      "D. Belajar html (tebal)",
      "E. Belajar html (miring)"
    ],
    correct: "C. Belajar html (besar/heading)",
    explanation: "<h1> membuat teks besar sebagai judul utama halaman. Ini adalah heading level 1, yang paling penting dan paling besar di antara semua heading."
  },
  {
    id: 9,
    question: "Potongan <sub>2</sub> menghasilkan...",
    options: [
      "A. 2 (normal)",
      "B. ₂ (angka 2 di bawah teks)",
      "C. ² (angka 2 di atas teks)",
      "D. 2² (tanda pangkat)",
      "E. [2] (kurung siku)"
    ],
    correct: "B. ₂ (angka 2 di bawah teks)",
    explanation: "Tag <sub> menampilkan teks lebih kecil di bawah garis dasar (subscript). Ini berguna untuk rumus kimia seperti H₂O atau dalam penulisan matematika."
  },
  {
    id: 10,
    question: "Potongan <b>html</b> menggunakan <i><u>web editor vscode</u></i> menghasilkan...",
    options: [
      "A. Semua teks normal",
      "B. html tebal, web editor vscode miring dan bergaris bawah",
      "C. Semua teks tebal",
      "D. html miring, web editor vscode tebal",
      "E. Semua teks bergaris bawah"
    ],
    correct: "B. html tebal, web editor vscode miring dan bergaris bawah",
    explanation: "Tag <b>, <i>, dan <u> bisa dikombinasikan untuk menciptakan gaya teks berbeda. 'html' akan tebal, sedangkan 'web editor vscode' akan miring sekaligus bergaris bawah."
  }
];

export const materiSections = [
  {
    id: 1,
    title: "Tag HTML Dasar (Video)",
    content: `
      <iframe 
        src="https://www.youtube.com/embed/FyiHtVXlpIw"
          width="100%"
          height="480"
          style={{ border: "none", borderRadius: "12px" }}
          allow="autoplay"
          loading="lazy"
      </iframe>
      <p style="text-align: center;">Video di atas menjelaskan dasar-dasar HTML, termasuk struktur utama dan tag dasar.</p>
     `,
    table: [
      {
        tag: "<html>",
        function: "Tag pembuka dokumen HTML",
        example: "<html>...</html>"
      },
      {
        tag: "<head>",
        function: "Bagian kepala dokumen (metadata)",
        example: "<head>...</head>"
      },
      {
        tag: "<title>",
        function: "Judul halaman (tampil di tab browser)",
        example: "<title>Judul Halaman</title>"
      },
      {
        tag: "<body>",
        function: "Bagian isi dokumen yang tampil di browser",
        example: "<body>...</body>"
      }
    ],
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>Halaman Pertama Saya</title>
  </head>
  <body>
    <h1>Selamat Datang di HTML</h1>
    <p>Ini adalah paragraf pertama saya.</p>
  </body>
</html>`
//     id: 1,
//     title: "Tag HTML Dasar",
//     content: "HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web. Tag HTML     adalah elemen dasar yang digunakan untuk membuat struktur halaman web.",
//     table: [
//       {
//         tag: "<html>",
//         function: "Tag pembuka dokumen HTML",
//         example: "<html>...</html>"
//       },
//       {
//         tag: "<head>",
//         function: "Bagian kepala dokumen (metadata)",
//         example: "<head>...</head>"
//       },
//       {
//         tag: "<title>",
//         function: "Judul halaman (tampil di tab browser)",
//         example: "<title>Judul Halaman</title>"
//       },
//       {
//         tag: "<body>",
//         function: "Bagian isi dokumen yang tampil di browser",
//         example: "<body>...</body>"
//       }
//     ],
//     code: `<!DOCTYPE html>
// <html>
//   <head>
//     <title>Halaman Pertama Saya</title>
//   </head>
//   <body>
//     <h1>Selamat Datang di HTML</h1>
//     <p>Ini adalah paragraf pertama saya.</p>
//   </body>
// </html>`
  },
  {
    id: 2,
    title: "Elemen pada Tag <body>",
    content: "Tag <body> berisi semua konten yang akan ditampilkan di halaman web, seperti teks, gambar, link, dan lainnya.",
    table: [
      {
        tag: "<h1> - <h6>",
        function: "Heading (judul) dari level 1-6",
        example: "<h1>Judul Utama</h1>"
      },
      {
        tag: "<p>",
        function: "Paragraf teks",
        example: "<p>Ini paragraf</p>"
      },
      {
        tag: "<br>",
        function: "Baris baru (line break)",
        example: "Baris 1<br>Baris 2"
      },
      {
        tag: "<hr>",
        function: "Garis horizontal pemisah",
        example: "<hr>"
      },
      {
        tag: "<a>",
        function: "Link/tautan",
        example: '<a href="url">Teks Link</a>'
      }
    ],
    code: `<body>
  <h1>Selamat Datang</h1>
  <p>Ini adalah paragraf pertama.</p>
  <hr>
  <h2>Sub Judul</h2>
  <p>Paragraf kedua dengan<br>baris baru.</p>
  <a href="https://google.com">Kunjungi Google</a>
</body>`
  },
  {
    id: 3,
    title: "Tag HTML untuk Formatting",
    content: "HTML menyediakan berbagai tag untuk memformat teks agar lebih menarik dan mudah dibaca.",
    table: [
      {
        tag: "<b>",
        function: "Teks tebal (bold)",
        example: "<b>Tebal</b>"
      },
      {
        tag: "<i>",
        function: "Teks miring (italic)",
        example: "<i>Miring</i>"
      },
      {
        tag: "<u>",
        function: "Teks bergaris bawah (underline)",
        example: "<u>Garis Bawah</u>"
      },
      {
        tag: "<strong>",
        function: "Teks penting (tebal)",
        example: "<strong>Penting</strong>"
      },
      {
        tag: "<em>",
        function: "Penekanan teks (miring)",
        example: "<em>Ditekankan</em>"
      }
    ],
    code: `<body>
  <p>Teks <b>tebal</b> dan <i>miring</i></p>
  <p>Ini <u><b>tebal dan bergaris bawah</b></u></p>
  <p><strong>Sangat</strong> <em>penting</em>!</p>
</body>`
  },
  {
    id: 4,
    title: "Tag Pengaturan Huruf dan Gambar",
    content: "Tag-tag khusus untuk mengatur format teks spesifik dan menampilkan gambar dalam halaman web.",
    table: [
      {
        tag: "<sup>",
        function: "Superscript (pangkat)",
        example: "2<sup>3</sup> → 2³"
      },
      {
        tag: "<sub>",
        function: "Subscript (indeks bawah)",
        example: "H<sub>2</sub>O → H₂O"
      },
      {
        tag: "<mark>",
        function: "Teks yang ditandai (highlight)",
        example: "<mark>Penting</mark>"
      },
      {
        tag: "<del>",
        function: "Teks yang dicoret",
        example: "<del>Dihapus</del>"
      },
      {
        tag: "<img>",
        function: "Menampilkan gambar",
        example: '<img src="foto.jpg" alt="Deskripsi">'
      }
    ],
    code: `<body>
  <h1>Rumus Kimia</h1>
  <p>Air: H<sub>2</sub>O</p>
  <p>Kuadrat: 5<sup>2</sup> = 25</p>

  <h2>Foto Sekolah</h2>
  <img src="sekolah.jpg" alt="Gedung Sekolah" width="400">
</body>`
  }
];
