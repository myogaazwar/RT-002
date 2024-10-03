import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '/logo/logo.png';

const FooterItem = ({ title, children }) => {
  return (
    <div className=' mt-5 lg:flex lg:flex-col lg:gap-y-2'>
      <h4 className='eb-garamond-bold text-lg '>{title}</h4>
      <div className='flex flex-col'>{children}</div>
    </div>
  );
};

const FooterContact = ({ contact, children }) => {
  return (
    <div className='flex items-center gap-x-3'>
      <div className='text-justify'>{children}</div>
      <a href='#'>{contact}</a>
    </div>
  );
};

const Footer = () => {
  return (
    <section
      id={'footer'}
      className='h-full eb-garamond-medium mt-32 bg-main-color pb-24'
    >
      <main className='px-8 py-2  max-w-desktop mx-auto lg:flex lg:flex-row-reverse lg:justify-between lg:gap-x-20 lg:items-center '>
        <div className='lg:flex lg:gap-x-12'>
          <FooterItem title={'Navigasi Cepat'}>
            <a href='#'>Home</a>
            <a href='#'>Kegiatan</a>
            <a href='#'>Tentang</a>
            <a href='#'>Galeri</a>
          </FooterItem>

          <FooterItem title={'Tentang Kami'}>
            <a href='#'>Struktur Rukun Tetangga</a>
            <a href='#'>Prestasi dan Pencapaian</a>
            <a href='#'>Semua Kegiatan</a>
          </FooterItem>

          <FooterItem title={'Kontak Kami'}>
            <FooterContact
              contact={
                'Perumahan Jl Gunung Krakatau, Kecamatan Babelan, Bekasi Utara'
              }
            >
              <MdLocationPin />
            </FooterContact>

            <FooterContact contact={'0812xxxxxx'}>
              <FaPhoneAlt />
            </FooterContact>

            <FooterContact contact={'yoga@gmail.com'}>
              <MdEmail />
            </FooterContact>
          </FooterItem>
        </div>

        <div className='mt-10 flex flex-col gap-y-2 text-justify '>
          <div>
            <img className='w-24' src={logo} alt='' />
            <p className='mt-2'>
              RT002 adalah tempat tinggal yang nyaman dan penuh kebersamaan.
            </p>
          </div>

          <div>
            <p>Perumahan Jl Gunung Krakatau</p>
            <p>Pondok Ungu Permai, Kecamatan Babelan, Bekasi Utara.</p>
          </div>

          <p>@Copyright-2024 | RT 002 (Muhammad Yoga Azwar)</p>
        </div>
      </main>
    </section>
  );
};

export default Footer;
