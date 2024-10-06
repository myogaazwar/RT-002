import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import galeri1 from '/galeri/galeri1.png';
import Button from '../Elements/Button/Button';
import { Link } from 'react-router-dom';
import { daftarGaleri } from '../../data/data';

const Galeri = () => {
  return (
    <section
      id={'galeri'}
      className='h-full px-8 py-2 mt-20  eb-garamond-medium max-w-desktop mx-auto'
    >
      <h2 className='mb-5 text-center text-2xl md:text-3xl text-black dark:text-white '>
        GALERI
      </h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        className='custom-swiper '
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {daftarGaleri.map((galeri) => (
          <SwiperSlide key={galeri.id}>
            <img
              className='w-full h-80 object-cover '
              src={galeri.image}
              alt=''
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to={'/galeri'}>
        <div className='w-52 text-black dark:text-white text-left mt-5 eb-garamond-medium underline underline-offset-8 hover:scale-105 '>
          Lihat seluruh galeri..
        </div>
      </Link>
    </section>
  );
};

export default Galeri;
