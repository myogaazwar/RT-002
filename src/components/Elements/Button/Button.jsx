import React from 'react';

const Button = ({ onSelect, children, classname, type }) => {
  return (
    <button
      type={type}
      className={`${classname}  h-[50px] w-[137px] rounded-xl`}
      onClick={onSelect}
    >
      {children}
    </button>
  );
};

export default Button;
