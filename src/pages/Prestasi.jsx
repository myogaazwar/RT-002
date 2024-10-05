import React from 'react';

import prestasi1 from '/prestasi/prestasi1.jpg';
import { prestasiPencapaian } from '../data/data';

const Prestasi = ({ title, image, items }) => {
  return (
    <main className='py-5 grid gap-y-5 px-5 rounded-lg bg-gray-50 shadow-2xl sm:grid-cols-2 sm:gap-x-5 sm:items-center xl:w-[1200px] xl:mx-auto hover:scale-95 transition-transform  '>
      <div>
        <h2 className='text-2xl pb-2'>{title}</h2>
        <ul className='list-disc list-inside text-justify'>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className=' sm:w-full'>
        <img className='rounded-xl shadow-xl' src={image} alt={title} />
      </div>
    </main>
  );
};

const PrestasiPage = () => {
  return (
    <section
      id={'prestasi'}
      className='h-full eb-garamond-medium px-8 mx-auto pt-10 pb-40 max-w-desktop md:pt-28'
    >
      <div>
        <h1 className='eb-garamond-semibold text-3xl h-[100px] text-center text-main-color underline underline-offset-[12px] '>
          Prestasi & Pencapaian
        </h1>

        <div className='grid gap-y-5'>
          {prestasiPencapaian.map((prestasi, index) => (
            <Prestasi
              key={index}
              title={prestasi.title}
              items={prestasi.items}
              image={prestasi.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrestasiPage;
