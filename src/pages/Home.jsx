import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Kegiatan from '../components/kegiatan/Kegiatan';
import Tentang from '../components/tentang/Tentang';

export const HomePage = () => {
  return (
    <section className='max-w-desktop mx-auto'>
      <section className='px-8 py-2'>
        <Jumbotron />
        <Kegiatan />
      </section>

      <Tentang />
    </section>
  );
};
