import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className='bg-white px-3 py-4 rounded-md shadow-md -inset-10 hover:scale-105 hover:shadow-lg transition-transform'>
      <img className='rounded-md w-full' src={image} alt={title} />
      <div className='flex flex-col gap-y-3 mt-2'>
        <h3 className='eb-garamond-bold'>{title}</h3>
        <p className='text-justify text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
