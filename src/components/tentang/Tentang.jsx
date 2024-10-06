import React, { useState } from 'react';

import { LuPlusCircle } from 'react-icons/lu';
import Accordion from '../Elements/Accordion/Accordion';
import { tentangKami } from '../../data/data';

const Tentang = () => {
  const [showAccordion, setShowAccordion] = useState(false);

  const handleShowAccordion = (accordionName) => {
    setShowAccordion((prevShowAccordion) =>
      prevShowAccordion === accordionName ? '' : accordionName
    );
  };

  return (
    <section
      id={'tentang'}
      className='h-full eb-garamond-medium mt-32 bg-main-color dark:bg-second-color'
    >
      <main className=' py-5 px-8 flex flex-col gap-y-10 lg:flex-row gap-x-28 lg:py-20  lg:max-w-desktop mx-auto  '>
        <div className='text-black dark:text-white'>
          <h2 className=' text-center text-2xl eb-garamond-bold md:text-3xl'>
            TENTANG KAMI
          </h2>
          <p className='text-justify mt-5 md:text-lg'>
            RT002 adalah lingkungan yang berkomitmen menjaga kebersihan,
            keamanan, dan kerukunan antarwarga. Dengan semangat gotong royong,
            kami berusaha menciptakan suasana yang nyaman dan harmonis.`
          </p>
        </div>

        <section className='flex flex-col gap-y-3 '>
          {tentangKami &&
            tentangKami.map((tentang) => (
              <Accordion
                key={tentang.id}
                id={tentang.id}
                showAccordion={showAccordion}
                handleShowAccordion={handleShowAccordion}
                title={tentang.title}
                description={tentang.description}
              />
            ))}
        </section>
      </main>
    </section>
  );
};

export default Tentang;
