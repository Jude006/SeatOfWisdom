import React from 'react'

const Button = ({text,bgColor,textColor}) => {
  return (
    <button className={`py-2 px-8 cursor-pointer hover:bg-accent hover:text-primary  duration-300 ease-linear ${bgColor} ${textColor} rounded-full font-poppins `} >{text}</button>
  )
}

export default Button