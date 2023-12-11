"use client"
import React from 'react'
import profile from '@/img/yo.jpg'
import { BsGithub, BsLinkedin, } from 'react-icons/bs';
import { BiLogoGmail, BiSolidChevronDown } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

function Welcome() {
  const greeting = `Hello I'm`
  const listStyle = 'hover:text-gray-800 transition-all cursor-pointer hover:font-bold mr-3 flex items-center h-[11vh]'
  const buttonStyle = 'w-12 h-12 hover:text-gray-50 hover:bg-gray-800 rounded-full transition-all flex items-center justify-center text-gray-800 text-[1.3em]'
  return (
    <section className={`w-full min-h-[90vh] overflow-hidden mb-5 flex items-center justify-center relative `}>
      <div className='xl:w-[80%] w-full min-h-[80vh] flex lg:flex-row flex-col mt-10'>
        <div className='lg:flex hidden w-full h-[7vh] absolute bottom-0 left-0 items-center justify-center text-3xl text-gray-800 font-bold'>
          <BiSolidChevronDown />
        </div>
        <div className=' lg:w-[50%] w-full min-h-[50vh]  lg:h-[80vh] flex items-center justify-center flex-col'>
          <h3 className='text-gray-500 font-semibold text-[1.3rem]'>{greeting}</h3>
          <h1 className='md:text-[2.2rem] text-[1.8rem] text-gray-800 font-bold'>Rafael Rosabal Chamizo.</h1>
          <h2 className='md:text-[1.8rem] text-[1.4rem] font-semibold text-gray-600'>
            Frontend Developer.
          </h2>
          <div className='w-full min-h-[10vh] mt-5 px-3 flex items-center justify-center'>
            <Link href='/cv.pdf'
              download={'CV Rafael Rosabal Chamizo Frontend Developer'}
              target='_blank'
            >
              <button className='px-5 py-2 min-w-[150px] h-12 text-gray-100 bg-slate-800 rounded-3xl transition-all hover:bg-red-500 hover:shadow-2xl md:mx-3 mx-1'>
                Download CV
              </button>
            </Link>
            <Link href={'/#contactme'}>
              <button
                className='px-5 py-2 min-w-[150px] h-12 text-gray-100 bg-slate-800 rounded-3xl transition-all hover:bg-green-500 hover:shadow-2xl md:mx-3 mx-1'>
                Contact me
              </button>
            </Link>
          </div>
          <ul className='flex items-center text-[1.4rem] font-semibold text-gray-500 h-[11vh] justify-around'>
            <li className={`${listStyle}`}>
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/escalantechamsor" target="_blank" rel="noopener noreferrer">
                  <BsGithub />
                </a>
              </button>
            </li>
            <li className={`${listStyle}`}>
              <button className={`${buttonStyle}`}>
                <a href="https://www.linkedin.com/in/rafael-rosabal-chamizo" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin />
                </a>
              </button>
            </li>
            <li className={`${listStyle}`}>
              <Link href={'/#contactme'}>
                <button className={`${buttonStyle}`}>
                  <BiLogoGmail />
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`lg:w-[50%] w-full h-[60vh] lg:h-[80vh] flex items-center justify-center lg:mt-0 mt-5`}>
          <Image className='md:w-[280px] w-[300px] transition-all h-[300px] md:h-[280px] rounded-full md:scale-110' src={profile} alt='Persona de perfil' priority placeholder='blur'/>
        </div>
      </div>
    </section>

  )
}

export default Welcome