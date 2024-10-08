import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Kegiatan from '../components/kegiatan/Kegiatan';
import Tentang from '../components/tentang/Tentang';
import Galeri from '../components/galeri/Galeri';
import Footer from '../components/footer/Footer';

export const HomePage = () => {
  return (
    <section className='bg-white dark:bg-dark-mode'>
      <section className='max-w-desktop  mx-auto px-8 py-2'>
        <Jumbotron />
        <Kegiatan />
      </section>

      <Tentang />
      <Galeri />
      <Footer />
    </section>
  );
};
