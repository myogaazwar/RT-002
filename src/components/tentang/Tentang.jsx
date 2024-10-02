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
    <section id={'tentang'} className='h-full eb-garamond-medium mt-32'>
      <main className='bg-main-color py-5 px-8 flex flex-col gap-y-10'>
        <div>
          <h2 className=' text-center text-2xl eb-garamond-bold'>
            TENTANG KAMI
          </h2>
          <p className='text-justify mt-5'>
            RT002 adalah lingkungan yang berkomitmen menjaga kebersihan,
            keamanan, dan kerukunan antarwarga. Dengan semangat gotong royong,
            kami berusaha menciptakan suasana yang nyaman dan harmonis.`
          </p>
        </div>

        <section className='flex flex-col gap-y-3'>
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
