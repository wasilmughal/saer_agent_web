import React from 'react';

const Input = ({ type, name, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-2 border rounded-md placeholder:text-sm ${className}`}
    />
  );
};

export default Input;
