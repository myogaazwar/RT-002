import React from 'react';

const Card = ({ title, image, description, children }) => {
  return (
    <div className=' bg-white px-3 py-4 rounded-md shadow-md  hover:scale-105 hover:shadow-lg transition-transform md:flex md:flex-col md:justify-between md:h-full'>
      <img
        className='rounded-md w-full  md:object-cover md:h-48 lg:object-contain lg:h-full '
        src={image}
        alt={title}
      />
      <div className='flex flex-col flex-grow gap-y-3 mt-2 md:justify-start md:flex  md:mt-4 '>
        <h3 className='eb-garamond-bold md:text-lg lg:text-xl'>{title}</h3>
        <p className='text-justify text-sm lg:text-lg '>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
