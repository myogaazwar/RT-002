import React from 'react';
import Button from '../Elements/Button/Button';
import imgJumbotron from '/jumbotron/imgJumbotron.jpg';

const Jumbotron = () => {
  return (
    <section id={'home'} className='h-full mt-5 eb-garamond-medium py-10'>
      <div className='flex flex-col-reverse mt-5 gap-y-10'>
        <div className=' text-center flex flex-col gap-y-5'>
          <div className='text-4xl'>
            <h1>SELAMAT DATANG</h1>
            <h1>DI RT 002/RW 010</h1>
          </div>

          <p className='eb-garamond-regular-italic'>
            Bersama, Membangun Lingkungan Yang Harmonis dan Aman
          </p>

          <div>
            <Button
              classname={'bg-main-color w-full text-lg eb-garamond-bold '}
            >
              MASUK SEKARANG
            </Button>
          </div>
        </div>

        <div>
          <img
            className='rounded-3xl drop-shadow-xl'
            src={imgJumbotron}
            alt='Perumahan RT002'
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
