import kegiatan1 from '/kegiatan/kegiatan1.jpg';
import kegiatan2 from '/kegiatan/kegiatan2.jpeg';
import kegiatan3 from '/kegiatan/kegiatan3.jpg';

const semuaKegiatan = [
  {
    id: '1',
    title: 'Gotong Royong Bersama',
    image: kegiatan1,
    description: `Semangat kebersamaan dalam bekerja bersama untuk mencapai tujuan bersama dan menciptakan lingkungan yang harmonis.`,
  },
  {
    id: '2',
    title: 'Kepedulian Sosial',
    image: kegiatan2,
    description: `Peduli terhadap sesama, saling tolong-menolong, dan menjaga solidaritas antarwarga.`,
  },
  {
    id: '3',
    title: 'Lingkungan Bersih',
    image: kegiatan3,
    description: `Menjaga kebersihan dan keindahan lingkungan untuk kesehatan dan kenyamanan bersama`,
  },
];

const tentangKami = [
  {
    id: '1',
    title: 'SEJARAH RT002',
    description: `RT002 dibentuk pada tahun 1985 sebagai bagian dari upaya memperkuat persatuan dan gotong royong di lingkungan ini. Sejak awal berdirinya, RT002 terus berkembang dengan berfokus pada kesejahteraan warga serta menjaga kebersihan dan keamanan lingkungan.`,
  },
  {
    id: '2',
    title: 'VISI DAN MISI',
    description: {
      visi: 'Mewujudkan lingkungan RT002 yang aman, nyaman, dan bersih, dengan semangat gotong royong dan kebersamaan warga.',
      misi: [
        'Meningkatkan rasa kepedulian dan tanggung jawab sosial antarwarga.',
        'Menciptakan lingkungan yang hijau dan asri dengan program penghijauan.',
        'Mengadakan kegiatan sosial yang mempererat hubungan antarwarga.',
      ],
    },
  },

  {
    id: '3',
    title: 'FASILITAS',
    description: {
      heading:
        'RT002 memiliki beberapa fasilitas yang digunakan oleh warga, antara lain:',
      body: [
        'Balai Warga sebagai tempat pertemuan dan kegiatan.',
        'Taman bermain anak-anak.',
        'Lapangan olahraga yang digunakan untuk kegiatan kebugaran bersama.',
        'Pos ronda untuk menjaga keamanan lingkungan.',
      ],
    },
  },

  {
    id: '4',
    title: 'PERATURAN',
    description: {
      heading: 'Beberapa peraturan yang berlaku di RT002 antara lain:',
      body: [
        'Warga wajib mengikuti kegiatan gotong royong setiap akhir pekan.',
        'Setiap warga bertanggung jawab atas kebersihan lingkungan sekitar tempat tinggalnya.',
        'Jam malam berlaku mulai pukul 22:00, kecuali ada kegiatan khusus yang telah disetujui oleh pengurus RT.',
        'Dilarang membuang sampah sembarangan, disediakan tempat sampah di beberapa titik strategis.',
      ],
    },
  },
];

export { semuaKegiatan, tentangKami };
