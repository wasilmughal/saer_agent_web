// src/components/InputField.js
import React from 'react';

const FormInp = ({ type, name, value, onChange, className = '', ...props }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded ${className}`}
      {...props}
      required
    />
  );
};

export default FormInp;
