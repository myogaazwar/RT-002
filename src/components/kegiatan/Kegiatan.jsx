import React from 'react';

import Card from '../Elements/Card/Card';
import Button from '../Elements/Button/Button';
import { semuaKegiatan } from '../../data/data';

const Kegiatan = () => {
  return (
    <section id={'kegiatan'} className='h-full eb-garamond-medium mt-32 '>
      <main>
        <div>
          <h2 className='text-2xl text-center'>KEGIATAN</h2>
          <p className='text-sm mt-2 text-justify'>
            Setiap kegiatan yang kami lakukan berlandaskan semangat kebersamaan
            untuk menjaga kebersihan, keamanan, dan kenyamanan lingkungan RT002.
            Bersama kita bisa!
          </p>
        </div>

        <div className='mt-10 grid gap-y-4'>
          {semuaKegiatan.map((kegiatan) => (
            <Card
              key={kegiatan.id}
              title={kegiatan.title}
              image={kegiatan.image}
              description={kegiatan.description}
            />
          ))}

          <Button classname={'w-full bg-gray-200 mt-5'}>
            Lihat kegiatan lainnya..
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Kegiatan;
