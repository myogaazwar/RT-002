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
];

export { semuaKegiatan, tentangKami };
