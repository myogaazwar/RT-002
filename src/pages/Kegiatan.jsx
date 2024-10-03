import React from 'react';
import Card from '../components/Elements/Card/Card';
import { semuaKegiatan } from '../data/data';
import Button from '../components/Elements/Button/Button';

const KegiatanPage = () => {
  return (
    <section className='h-full eb-garamond-medium px-8 mx-auto pt-10 pb-40 max-w-desktop md:pt-28'>
      <div>
        <h1 className='eb-garamond-semibold text-3xl h-[50px] text-center text-main-color underline underline-offset-[12px] '>
          Semua Kegiatan
        </h1>
        <div className='mt-10 grid gap-y-5 sm:grid-cols-2 sm:gap-x-5 md:grid-cols-3 md:gap-x-10 xl:grid-flow-col '>
          {semuaKegiatan.map((kegiatan) => (
            <Card
              key={kegiatan.id}
              title={kegiatan.title}
              image={kegiatan.image}
              description={kegiatan.description}
            >
              <Button
                classname={
                  'bg-slate-500 mt-5 h-auto py-2 w-full text-white text-sm lg:text-lg '
                }
              >
                Lihat Selengkapnya
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KegiatanPage;
