import React from 'react';
import Card from '../components/Elements/Card/Card';
import { daftarGaleri } from '../data/data';

const GaleriPage = () => {
  return (
    <section className='h-full eb-garamond-medium px-8 mx-auto pt-10 pb-40 max-w-desktop md:pt-28'>
      <div>
        <h1 className='eb-garamond-semibold text-3xl h-[50px] text-center text-main-color underline underline-offset-[12px] '>
          Daftar Galeri
        </h1>

        <div className='grid gap-y-5 min-[690px]:grid-cols-2 min-[690px]:gap-x-5 md:grid-cols-3 xl:grid-cols-4 pt-10'>
          {daftarGaleri.map((galeri) => (
            <div>
              <Card
                image={galeri.image}
                description={galeri.description}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriPage;
