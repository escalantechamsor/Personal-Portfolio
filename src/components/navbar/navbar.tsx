import React from 'react'
import { BsGithub, BsLinkedin, BsFront } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import brand from '@/img/brand.png'
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {

  return (
    <nav className='w-full h-[11vh] bg-gray-50 fixed top-0 left-0 flex items-center md:px-20 px-5 justify-between text-gray-900 z-50 bg-opacity-70 '>
     <Link href={'/'}>
     <div className='w-[200px] h-[11vh] flex items-center  bg-gray-50 '>
        <span className='w-10 h-10 hover:text-gray-50 hover:bg-gray-800 rounded-full text-gray-800 flex items-center justify-center text-[1.5em] transition-all'>
          <BsFront />
        </span>
        <h1 className='text-[1.5rem] font-bold text-gray-900'>
          ChamsorEsc.
        </h1>
      </div>
     </Link>


      <button className='w-[150px] h-10 py-2 rounded-full bg-gray-800 text-gray-100 font-medium hover:bg-gray-700 transition-all '>
        Hire me
      </button>



    </nav>
  )
}

export default Navbar