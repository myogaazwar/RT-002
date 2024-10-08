import React from 'react';
import { LuPlusCircle } from 'react-icons/lu';
import { LuMinusCircle } from 'react-icons/lu';

const Accordion = ({
  showAccordion,
  handleShowAccordion,
  id,
  title,
  description,
}) => {
  return (
    <div
      className='bg-white dark:bg-slate-900 px-2 py-2 '
      onClick={() => handleShowAccordion(id)}
    >
      <div className='flex items-center justify-between cursor-pointer'>
        <h3 className='md:text-xl text-black dark:text-white'>{title}</h3>
        {showAccordion === id ? (
          <LuMinusCircle className='text-xl lg:text-2xl dark:text-white' />
        ) : (
          <LuPlusCircle className='text-xl lg:text-2xl dark:text-white' />
        )}
      </div>

      <div
        className={` ${
          showAccordion === id
            ? ' opacity-100  max-h-72 transition-all  duration-300 ease-in-out  '
            : ' opacity-0 max-h-0 transition-all duration-300 ease-in-out'
        }  text-slate-500 dark:text-gray-400 text-sm text-justify overflow-hidden   `}
      >
        {typeof description === 'object' && description.visi ? (
          <div className='pt-2 md:text-lg'>
            <p>
              <strong>Visi:</strong>
            </p>
            <span>{description.visi}</span>

            <p className='mt-2'>
              <strong>Misi:</strong>
            </p>

            <ol className='list-disc list-inside '>
              {description.misi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        ) : typeof description === 'object' && description.body ? (
          <div className='pt-2 md:text-lg'>
            <p>{description.heading}</p>

            <ol className='list-disc list-inside mt-2'>
              {description.body.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        ) : (
          <p className='pt-2 md:text-lg'>{description}</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
