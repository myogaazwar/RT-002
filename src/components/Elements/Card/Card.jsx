import React from 'react';

const Card = ({ title, image, description, children }) => {
  return (
    <div className=' bg-white dark:bg-[#1B1A55] px-3 py-4 md:px-5 md:py-5 rounded-xl shadow-md  hover:scale-105 hover:shadow-lg transition-transform md:flex md:flex-col md:justify-between md:h-full'>
      <img
        className='rounded-md w-full  md:object-cover md:object-top md:h-48 lg:object-cover lg:h-80 '
        src={image}
        alt={title}
      />
      <div className='flex flex-col flex-grow gap-y-3 mt-2 md:justify-start md:flex  md:mt-4 text-black dark:text-white '>
        <h3 className='eb-garamond-bold md:text-lg lg:text-xl '>{title}</h3>
        <p className='text-justify text-sm lg:text-lg  '>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
