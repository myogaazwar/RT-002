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
      <h2 className='mb-5 text-center text-2xl md:text-3xl '>GALERI</h2>
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
        <Button
          classname={
            'bg-gray-200 mt-5 w-52 hover:scale-105 hover:bg-gray-300  '
          }
        >
          Lihat seluruh galeri...
        </Button>
      </Link>
    </section>
  );
};

export default Galeri;
