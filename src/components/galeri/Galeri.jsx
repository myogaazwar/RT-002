import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import galeri1 from '/galeri/galeri1.png';

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
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <img className='w-full' src={galeri1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={galeri1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={galeri1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={galeri1} alt='' />
        </SwiperSlide>

        <SwiperSlide>
          <img className='w-full' src={galeri1} alt='' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Galeri;
