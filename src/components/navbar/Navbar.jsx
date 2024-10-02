import logo from '/logo/logo.png';
import Button from '../Elements/Button/Button';
import { NavItem } from '../Elements/NavItem/NavItem';
import { IoHomeOutline } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaTasks } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';
import { useState } from 'react';

export const IconContainer = ({ children }) => {
  return <div className='flex flex-col items-center md:hidden'>{children}</div>;
};

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdown = (dropdownName) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownName ? '' : dropdownName
    );
  };

  return (
    <div className='w-full fixed eb-garamond-medium  z-50 bottom-4  md:top-0 md:relative md:shadow-none md:border-b-2 md:rounded-none'>
      <nav className='flex justify-center max-w-desktop text-md h-16 md:mx-auto  md:h-20 md:justify-between md:py-2 md:px-8 transition-all ease-in-out duration-500 '>
        <img className='w-32 max-md:hidden' src={logo} alt='Logo RT002' />

        <ul className='z-10 flex items-center gap-x-8 justify-center text-md text-black eb-garamond-semibold bg-main-color border-2 border-black w-full mx-5 rounded-2xl px-2 md:bg-transparent md:border-none md:rounded-none md:px-0 md:text-xl transition-transform duration-500 '>
          <NavItem to={'home'}>
            <IconContainer>
              <IoHomeOutline />
            </IconContainer>
            Home
          </NavItem>
          <NavItem to={'kegiatan'}>
            <IconContainer>
              <FaTasks />
            </IconContainer>
            Kegiatan
          </NavItem>
          <NavItem to={'tentang'} onSelect={() => handleDropdown('tentang')}>
            <IconContainer>
              <FaPeopleGroup />
            </IconContainer>
            Tentang
          </NavItem>
          <NavItem to={'galeri'}>
            <IconContainer>
              <GrGallery />
            </IconContainer>
            Galeri
          </NavItem>
        </ul>

        <div
          id='dropdown-tentang'
          className={` ${
            openDropdown === 'tentang'
              ? ' opacity-100 translate-x-12 -translate-y-16 h-16   '
              : 'opacity-0 translate-x-12 translate-y-0 h-16  '
          } md:hidden absolute mb-2 bg-main-color rounded-b-2xl rounded-t-xl w-40  transition duration-400 ease-linear transform  `}
        >
          <ul className='text-center py-2'>
            <li>
              <a href=''>Struktur Organisasi</a>
            </li>
            <li>
              <a href=''>Prestasi & Pencapaian</a>
            </li>
          </ul>
        </div>

        <div className='flex items-center max-md:hidden'>
          <Button classname={'eb-garamond-bold '}>MASUK</Button>
        </div>
      </nav>
    </div>
  );
};
