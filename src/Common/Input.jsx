import React from 'react'

function Input({type,onchange,placeholder,name,title}) {
  return (
    <>
    <div className="  border w-full sm:w-96 border-l-[#0C31F1] border-l-4 border-gray-300  px-3 py-2">
      <p  className="text-gray-600 text-sm">{title}</p>
      <input
        type={type}
        onChange={onchange}
        name={name}
        className="mt-1 outline-none bg-transparent"
        placeholder={placeholder}
      />
    </div>

      
    </>
  )
}

export default Input
