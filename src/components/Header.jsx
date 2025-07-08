import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='bg-primary py-3 md:px-28 px-2 text-accent font-poppins flex items-center md:gap-10 gap-3   w-full'>
      <p className=' items-center md:gap-3 gap-2 md:text-[16px] text-sm md:flex hidden'><FaPhoneAlt className='text-secondary md:text-xl' /> 08068078495</p>
      <p className='flex items-center md:gap-3 gap-2 md:text-[16px] text-sm'><FaEnvelope className='text-secondary md:text-xl' />Seatofwisdomprivateschools@gmail.com</p>
    </header>
  )
}

export default Header