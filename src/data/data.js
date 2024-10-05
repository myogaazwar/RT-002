import kegiatan1 from '/kegiatan/kegiatan1.jpg';
import kegiatan2 from '/kegiatan/kegiatan2.jpeg';
import kegiatan3 from '/kegiatan/kegiatan3.jpg';
import kegiatan4 from '/kegiatan/kegiatan4.jpg';

import image1 from '/struktur/image1.jpg';

import prestasi1 from '/prestasi/prestasi1.jpg';
import prestasi2 from '/prestasi/prestasi2.jpg';
import prestasi3 from '/prestasi/prestasi3.jpg';
import prestasi4 from '/prestasi/prestasi4.jpg';
import prestasi5 from '/prestasi/prestasi5.jpg';

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
  {
    id: '4',
    title: 'Pengajian Bersama',
    image: kegiatan4,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat distinctio laboriosam cum asperiores eum aperiam, ullam odio reprehenderit consequuntur.
`,
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

const strukturRT = [
  {
    id: 1,
    image: image1,
    title: 'Budi Santoso',
    description: 'Ketua RT',
  },
  {
    id: 2,
    image: image1,
    title: 'Andi Wijaya',
    description: 'Wakil Ketua',
  },
  {
    id: 3,
    image: image1,
    title: 'Siti Aminah',
    description: 'Sekretaris',
  },
  {
    id: 4,
    image: image1,
    title: 'Dewi Lestari',
    description: 'Bendahara',
  },
  {
    id: 5,
    image: image1,
    title: 'Rudi Hartono',
    description: 'SIE Pembangunan',
  },
  {
    id: 6,
    image: image1,
    title: 'Sri Wulandari',
    description: 'SIE. Sosial dan Budaya',
  },
  {
    id: 7,
    image: image1,
    title: 'Joko Prasetyo',
    description: 'SIE. Humas',
  },
  {
    id: 8,
    image: image1,
    title: 'Faisal Akbar',
    description: 'SIE. Kebersihan',
  },
];

const prestasiPencapaian = [
  {
    title: 'Penghargaan Kebersihan Lingkungan',
    description:
      'RT002 berhasil meraih penghargaan "Lingkungan Terbersih" tingkat kelurahan selama 3 tahun berturut-turut dari 2019 hingga 2021.',
    items: [
      'Lingkungan RT002 dinilai sangat bersih oleh tim juri tingkat kelurahan.',
      'Program gotong royong mingguan berperan penting dalam menjaga kebersihan lingkungan.',
      'Setiap warga RT berperan aktif dalam menjaga kebersihan dengan memilah sampah rumah tangga.',
    ],
    image: prestasi1,
  },

  {
    title: 'Juara 1 Lomba Makan Kerupuk Antar RT',
    description:
      'RT002 meraih juara 1 dalam lomba makan kerupuk antar RT se-kelurahan pada perayaan 17 Agustus 2022.',
    items: [
      'Perwakilan dari RT002 berhasil memakan kerupuk tercepat dalam waktu 30 detik.',
      'Lomba ini diadakan sebagai bagian dari perayaan Hari Kemerdekaan, diikuti oleh 10 RT lainnya.',
      'Pemenang mendapatkan hadiah berupa piala dan hadiah hiburan untuk peserta lainnya.',
    ],
    image: prestasi2,
  },

  {
    title: 'Pengelolaan Sampah Terbaik',
    description:
      'Program pengelolaan sampah mandiri di RT002 diakui sebagai salah satu yang terbaik di tingkat kota pada tahun 2021.',
    items: [
      'Pemanfaatan kompos dari sampah organik membantu mengurangi limbah hingga 60%.',
      'Warga diajari cara mendaur ulang sampah untuk dijadikan produk berguna.',
      'Program ini juga menjadi inspirasi bagi RT-RT lain untuk melakukan hal serupa.',
    ],
    image: prestasi3,
  },

  {
    title: 'Juara 1 Lomba Sepeda Hias',
    description:
      'RT002 meraih juara 1 dalam lomba sepeda hias tingkat kecamatan pada tahun 2023.',
    items: [
      'Sepeda dihias dengan tema Hari Kemerdekaan dan menarik perhatian juri.',
      'Lomba ini diikuti oleh 15 peserta dari berbagai RT di kecamatan.',
      'Pemenang lomba mendapatkan piala dan sepeda hias dipamerkan dalam pawai kelurahan.',
    ],
    image: prestasi4,
  },

  {
    title: 'Lingkungan Hijau Terbaik',
    description:
      'Pada tahun 2023, RT002 meraih penghargaan sebagai Lingkungan Hijau Terbaik karena program penghijauan yang berhasil.',
    items: [
      'Warga menanam lebih dari 100 pohon di sekitar rumah dan fasilitas umum.',
      'Taman bermain dan lahan hijau diperindah dengan tanaman hias lokal.',
      'Penghargaan ini meningkatkan kesadaran warga untuk terus menjaga lingkungan hijau.',
    ],
    image: prestasi5,
  },
];

export { semuaKegiatan, tentangKami, strukturRT, prestasiPencapaian };
