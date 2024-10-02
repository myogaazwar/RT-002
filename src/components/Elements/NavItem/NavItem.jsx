import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export const NavItem = ({ to, children, classname, onSelect }) => {
  return (
    <li>
      <ScrollLink
        to={to}
        smooth={true}
        duration={400}
        spy={true}
        hashSpy={true}
        offset={-20}
        activeClass='md:text-main-color text-white text-bold'
        className={`${classname} cursor-pointer`}
        onClick={onSelect}
      >
        {children}
      </ScrollLink>
    </li>
  );
};
