import React from 'react';
import Button from '../Elements/Button/Button';
import imgJumbotron from '/jumbotron/imgJumbotron.jpg';

const Jumbotron = () => {
  return (
    <section
      id={'home'}
      className='h-full  eb-garamond-medium pb-20 pt-2 md:py-10 '
    >
      <div className='flex flex-col-reverse mt-5 gap-y-10 md:flex-row md:justify-between md:items-center md:gap-x-4 md:py-10 md:h-[800px]'>
        <div className=' text-center flex flex-col gap-y-5 md:text-left'>
          <div className='text-4xl lg:text-5xl'>
            <h1>SELAMAT DATANG</h1>
            <h1>DI RT 002/RW 010</h1>
          </div>

          <p className='eb-garamond-regular-italic lg:text-xl'>
            Bersama, Membangun Lingkungan Yang Harmonis dan Aman
          </p>

          <div>
            <Button
              classname={
                'bg-main-color w-full text-lg eb-garamond-bold md:w-[300px]  '
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
