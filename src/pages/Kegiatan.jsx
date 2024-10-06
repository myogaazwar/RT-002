import React, { useEffect, useState } from 'react';
import Card from '../components/Elements/Card/Card';
import { semuaKegiatan } from '../data/data';
import Button from '../components/Elements/Button/Button';

const KegiatanPage = () => {
  const [daftarKegiatan, setDaftarKegiatan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setDaftarKegiatan(semuaKegiatan);
      setIsLoading(false);
    }, 500);
  }, []);

  const filteredKegiatan = daftarKegiatan.filter((kegiatan) => {
    return search.toLowerCase() === ''
      ? kegiatan
      : kegiatan.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className='h-full eb-garamond-medium px-8 mx-auto pt-10 pb-40 max-w-desktop md:pt-28'>
      <div>
        <h1 className='eb-garamond-semibold text-3xl h-[50px] text-center text-main-color underline underline-offset-[12px] '>
          Semua Kegiatan
        </h1>

        <div className='mx-auto w-full flex flex-col items-center justify-center'>
          <input
            className='text-sm bg-gray-50 border rounded-xl px-3 py-2 w-full  outline-none text-gray-900 border-gray-300 mt-5 focus:border-main-color  focus:ring-main-color md:max-w-3xl  '
            type='search'
            placeholder='Cari kegiatan...'
            id='search-kegiatan'
            maxLength={100}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search.length > 0 && (
            <p className='mt-2 dark:text-white'>
              Mencari: <span>{search}</span>
            </p>
          )}
        </div>

        {isLoading && (
          <h1 className='text-center text-2xl mt-10 dark:text-white'>
            Loading, Harap tunggu...
          </h1>
        )}

        {daftarKegiatan.length > 0 && (
          <div className='mt-10 gap-y-8 grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3 md:grid-cols-3 md:gap-x-5 xl:grid-cols-4 '>
            {filteredKegiatan.map((kegiatan) => (
              <Card
                key={kegiatan.id}
                title={kegiatan.title}
                image={kegiatan.image}
                description={
                  kegiatan.description.length > 100
                    ? kegiatan.description.substring(0, 100) + '...'
                    : kegiatan.description
                }
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
        )}

        {!isLoading && filteredKegiatan.length === 0 && (
          <div className='text-xl text-center pt-20 dark:text-white'>
            <h1>Maaf kegiatan yang kamu cari tidak ada...</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default KegiatanPage;
