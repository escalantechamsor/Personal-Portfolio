import React from 'react'
import { BsFront } from 'react-icons/bs';
import Link from 'next/link';

function Navbar() {

  return (
    <nav className='w-full h-[11vh] bg-gray-50 fixed top-0 left-0 flex items-center md:px-20 px-10 justify-between text-gray-900 z-50 bg-opacity-80 '>
      <Link href={'/'}>
        <div className='w-[200px] h-[11vh] flex items-center bg-gray-50 '>
          <span className='w-10 h-10 hover:text-gray-50 hover:bg-gray-800 rounded-full text-gray-800 flex items-center justify-center lg:text-[1.5em] text-[1.25rem] transition-all'>
            <BsFront />
          </span>
          <h1 className='lg:text-[1.5rem] text-[1.25rem] font-bold text-gray-900'>
            ChamsorEsc.
          </h1>
        </div>
      </Link>
      <Link href={'/#contactme'}>
        <button className='lg:w-[150px] w-[130px] h-10 py-2 rounded-full bg-gray-800 text-gray-100 font-medium hover:bg-gray-700 transition-all mr-10'>
          Hire me
        </button>
      </Link>



    </nav>
  )
}

export default Navbar