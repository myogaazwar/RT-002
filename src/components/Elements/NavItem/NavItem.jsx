import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';

export const NavItem = ({ to, children, classname, onSelect }) => {
  const location = useLocation();

  const isActive =
    location.pathname === `/${to}` ||
    (to === 'tentang' && location.pathname === '/struktur-rt') ||
    (to === 'tentang' && location.pathname === '/prestasi');

  if (location.pathname === '/') {
    return (
      <li>
        <ScrollLink
          to={to === 'home' ? '/' : to}
          smooth={true}
          duration={400}
          spy={true}
          hashSpy={true}
          offset={-80}
          activeClass='md:text-main-color text-white text-bold'
          className={`${classname} cursor-pointer`}
          onClick={onSelect}
        >
          {children}
        </ScrollLink>
      </li>
    );
  }

  return (
    <li>
      <NavLink
        to={to === 'home' ? '/' : `/${to}`}
        className={`${classname} cursor-pointer ${
          isActive ? 'text-bold text-white md:text-main-color' : ''
        }`}
        onClick={onSelect}
      >
        {children}
      </NavLink>
    </li>
  );
};
