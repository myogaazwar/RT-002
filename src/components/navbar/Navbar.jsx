import logo from '/logo/logo.png';
import logoDark from '/logo/logoDark.png';
import Button from '../Elements/Button/Button';
import { NavItem } from '../Elements/NavItem/NavItem';
import { IoHomeOutline } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

import { FaTasks } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

import { ThemeContext } from '../../App';

export const IconContainer = ({ children }) => {
  return <div className='flex flex-col items-center md:hidden'>{children}</div>;
};

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  const handleDropdown = (dropdownName) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownName ? '' : dropdownName
    );
  };

  const handleTentangClick = (event) => {
    event.preventDefault();
    handleDropdown('tentang');
  };

  return (
    <div
      className={` w-full fixed eb-garamond-medium  z-50 bottom-4  md:top-0  md:shadow-none md:rounded-none max-h-max  `}
    >
      <div className='md:w-full md:bg-white dark:md:bg-dark-mode md:border-b-2  '>
        <nav className='flex justify-center  text-md h-16 md:mx-auto  md:h-20 md:justify-between md:py-2 md:px-8 transition-all ease-in-out duration-500  md:max-w-desktop   '>
          <img
            className='w-32 max-md:hidden'
            src={theme ? logoDark : logo}
            alt='Logo RT002'
          />

          <ul className='z-10 flex relative items-center gap-x-8 justify-center text-md text-black dark:text-white dark:md:text-white eb-garamond-semibold bg-main-color dark:max-md:bg-second-color border-2 border-black w-full mx-5 rounded-2xl px-2 md:bg-transparent md:border-none md:rounded-none md:px-0 md:text-xl  transition-transform duration-500 '>
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
            <NavItem to={'tentang'} onSelect={handleTentangClick}>
              <IconContainer>
                <FaPeopleGroup />
              </IconContainer>
              Tentang
              {openDropdown ? (
                <IoIosArrowUp className='hidden md:block absolute translate-x-5' />
              ) : (
                <IoIosArrowDown className='hidden md:block absolute translate-x-5' />
              )}
            </NavItem>
            <NavItem to={'galeri'}>
              <IconContainer>
                <GrGallery />
              </IconContainer>
              Galeri
            </NavItem>

            <div
              id='dropdown-tentang'
              className={` ${
                openDropdown === 'tentang'
                  ? ' opacity-100 pointer-events-auto translate-x-12 -translate-y-[65px] h-20 md:block md:translate-y-24 md:translate-x-14 md:w-52 md:h-24 md:pt-2    '
                  : 'opacity-0 pointer-events-none translate-x-12 -translate-y-20 h-20 md:translate-x-[900px] md:translate-y-24  md:w-52 md:h-24  '
              }   absolute mb-2 bg-main-color dark:bg-second-color rounded-b-2xl rounded-t-xl w-40  transition duration-400 ease-linear transform border-t-2 border-r-2 border-l-2 border-black dark:border-slate-900 md:border-b-2 md:rounded-none  `}
            >
              <ul className='text-center py-2 flex flex-col gap-y-2'>
                <li className='hover:text-white active:text-white text-black dark:text-white md:text-lg text-sm flex flex-col'>
                  <NavLink
                    to={'/struktur-rt'}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-bold text-white dark:text-main-color'
                        : ''
                    }
                  >
                    Struktur Rukun Tetangga
                  </NavLink>
                </li>
                <li className='hover:text-white active:text-white text-black dark:text-white md:text-lg text-sm flex flex-col'>
                  <NavLink
                    to={'/prestasi'}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-bold text-white dark:text-main-color'
                        : ''
                    }
                  >
                    Prestasi & Pencapaian
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>

          <div className=' items-center hidden md:flex transition-transform duration-150 md:w-32 md:justify-center'>
            <div>
              {theme ? (
                <MdOutlineLightMode
                  className='text-2xl dark:md:text-white cursor-pointer'
                  onClick={toggleTheme}
                />
              ) : (
                <MdDarkMode
                  className='text-2xl cursor-pointer '
                  onClick={toggleTheme}
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
