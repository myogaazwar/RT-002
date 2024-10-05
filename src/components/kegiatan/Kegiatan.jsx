import React from 'react';

import Card from '../Elements/Card/Card';
import Button from '../Elements/Button/Button';
import { semuaKegiatan } from '../../data/data';
import { Link } from 'react-router-dom';

const Kegiatan = () => {
  return (
    <section id={'kegiatan'} className='h-full eb-garamond-medium mt-32 '>
      <main>
        <div>
          <h2 className='text-2xl text-center md:text-3xl'>KEGIATAN</h2>
          <p className='text-sm mt-2 text-justify md:text-center md:text-lg'>
            Setiap kegiatan yang kami lakukan berlandaskan semangat kebersamaan
            untuk menjaga kebersihan, keamanan, dan kenyamanan lingkungan RT002.
            Bersama kita bisa!
          </p>
        </div>

        <div className='mt-10 grid gap-y-4 sm:grid-cols-2 sm:gap-x-5 md:grid-cols-3 md:gap-x-4 lg:gap-x-10'>
          {semuaKegiatan.map((kegiatan) => (
            <Card
              key={kegiatan.id}
              title={kegiatan.title}
              image={kegiatan.image}
              description={kegiatan.description.substring(0, 100) + '...'}
            />
          ))}
        </div>
        <Link to={'/kegiatan'} className='flex items-center justify-center'>
          <Button
            classname={
              'w-full bg-gray-200 mt-10 md:w-52 hover:scale-105 hover:bg-gray-300'
            }
          >
            Lihat kegiatan lainnya..
          </Button>
        </Link>
      </main>
    </section>
  );
};

export default Kegiatan;
