import React from 'react';
import Button from '../Elements/Button/Button';
import imgJumbotron from '/jumbotron/imgJumbotron.jpg';

const Jumbotron = () => {
  return (
    <section
      id={'/'}
      className='h-full  eb-garamond-medium pb-20 pt-2 md:pt-0  '
    >
      <div className='flex flex-col-reverse mt-5 gap-y-10 md:flex-row md:justify-between md:items-center md:gap-x-4 md:py-10 md:h-[800px]'>
        <div className=' text-center flex flex-col gap-y-5 md:text-left '>
          <div className='text-4xl lg:text-5xl dark:text-white'>
            <h1>SELAMAT DATANG</h1>
            <h1>DI RT 002/RW 010</h1>
          </div>

          <p className='eb-garamond-regular-italic lg:text-xl dark:text-white'>
            Bersama, Membangun Lingkungan Yang Harmonis dan Aman
          </p>

          <div>
            <Button
              classname={
                'bg-main-color dark:bg-second-color dark:text-white w-full text-lg eb-garamond-bold md:w-[300px]  '
              }
            >
              MASUK SEKARANG
            </Button>
          </div>
        </div>

        <div>
          <img
            className='rounded-3xl drop-shadow-xl md:w-96 lg:w-[620px]'
            src={imgJumbotron}
            alt='Perumahan RT002'
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
