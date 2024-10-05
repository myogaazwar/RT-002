import React, { useEffect, useState } from 'react';
import Card from '../components/Elements/Card/Card';
import image1 from '/struktur/image1.jpg';

import { strukturRT } from '../data/data';

const StrukturRtPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataStrukturRT, setDataStrukturRT] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setDataStrukturRT(strukturRT);
        setIsLoading(false);
      }, 500);
    };

    fetchData();
  }, []);

  const ketuaRT = strukturRT.filter((struktur) => {
    return (
      struktur.description === 'Ketua RT' ||
      struktur.description === 'Wakil Ketua'
    );
  });

  const anggotaRT = strukturRT.filter((struktur) => {
    return (
      struktur.description !== 'Ketua RT' &&
      struktur.description !== 'Wakil Ketua'
    );
  });

  return (
    <section
      id={'struktur-rt'}
      className='h-full eb-garamond-medium px-8 mx-auto pt-10 pb-40 max-w-desktop md:pt-28'
    >
      <div>
        <h1 className='eb-garamond-semibold  text-3xl h-[50px] text-center text-main-color underline underline-offset-[12px]'>
          Struktur RT
        </h1>

        {isLoading && (
          <h1 className='text-center text-2xl mt-10'>
            Loading, Harap tunggu...
          </h1>
        )}

        {dataStrukturRT.length > 0 && (
          <div className='mt-14 grid gap-y-5'>
            <div className=' grid gap-y-5 min-[584px]:grid-cols-2 min-[584px]:gap-x-4 min-[584px]:gap-y-5 md:mx-auto md:gap-x-10  '>
              {ketuaRT.map((struktur) => (
                <div key={struktur.id} className='md:w-72'>
                  <Card
                    image={struktur.image}
                    title={struktur.title}
                    description={struktur.description}
                  />
                </div>
              ))}
            </div>

            <div className='grid gap-y-10 min-[584px]:grid-cols-2 min-[584px]:gap-x-4 min-[584px]:gap-y-5 md:mx-auto md:gap-x-10  xl:grid-cols-4 '>
              {anggotaRT.map((struktur) => (
                <div key={struktur.id} className='md:w-72'>
                  <Card
                    image={struktur.image}
                    title={struktur.title}
                    description={struktur.description}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StrukturRtPage;
