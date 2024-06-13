import React from 'react';
import { Link } from 'react-router-dom';
 
const Button = ({ type, label, variant,onclick,link }) => {
  const baseStyles = 'px-6 py-2  focus:outline-none';

  const variants = {
    solid: 'bg-blue-500 text-white hover:bg-blue-600 shadow-md',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100'
  };

  return (
     <Link to={link}>
     
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onclick} type={type}>
      {label}
    </button>
     </Link>
   );
};

export default Button;
