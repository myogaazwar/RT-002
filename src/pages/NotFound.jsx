import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Elements/Button/Button';

const NotFound = () => {
  return (
    <section className=' px-8 eb-garamond-medium bg-black h-screen flex flex-col gap-y-5 justify-center items-center w-full'>
      <h1 className='text-white text-7xl'>404</h1>
      <p className='text-white text-xl'>
        Maaf sayangnya, halaman yang kamu cari tidak ada...
      </p>

      <Link to={'/'} className='w-full md:w-96'>
        <Button
          classname={'bg-main-color w-full hover:scale-105 eb-garamond-bold'}
        >
          Kembali ke halaman utama
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
