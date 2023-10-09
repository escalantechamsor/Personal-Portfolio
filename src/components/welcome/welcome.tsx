"use client"
import React from 'react'
import style from './welcome.module.css'
import profile from '@/img/yo.jpg'
import { BsGithub, BsLinkedin, } from 'react-icons/bs';
import { BiLogoGmail, BiSolidChevronDown } from 'react-icons/bi';
import Image from 'next/image'
function Welcome() {
    type Options = {

        bottom: number,
        behavior: string

    }


    // const scrollDown = () => {
    //     window.scrollTo({
    //         bottom: 0,
    //         behavior: "smooth",
    //     });
    // };



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
                    <h2 className='text-gray-500 font-semibold text-[1.3rem]'>{greeting}</h2>
                    <h2 className='md:text-[2.2rem] text-[1.8rem] text-gray-800 font-bold'>Rafael Rosabal Chamizo.</h2>
                    <h3 className='md:text-[1.8rem] text-[1.4rem] font-semibold text-gray-600'>
                        Frontend Developer.
                    </h3>
                    <div className='w-full min-h-[10vh] mt-5 px-3 flex items-center justify-center'>
                        <button className='px-5 py-2 min-w-[150px] h-12 text-gray-100 bg-gray-900 rounded-3xl transition-all hover:bg-gray-800 hover:shadow-2xl md:mx-3 mx-1'>
                            Download CV
                        </button>
                        <button

                            className='px-5 py-2 min-w-[150px] h-12 text-gray-100 bg-gray-900 rounded-3xl transition-all hover:bg-gray-800 hover:shadow-2xl md:mx-3 mx-1'>
                            Contact me
                        </button>
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
                            <button className={`${buttonStyle}`}>
                                <BiLogoGmail />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={`lg:w-[50%] w-full h-[60vh] lg:h-[80vh] flex items-center justify-center  ${style.imagecontainer}`}>
                    <Image className='md:w-[280px] w-[300px] border-[1px] border-gray-300 h-[300px] md:h-[280px] rounded-full object-bottom shadow-2xl md:hover:scale-110 transition-all ' src={profile} alt='' />
                </div>






            </div>




            {/* <div className={` lg:w-[70%] md:w-[80%] w-full min-h-[80vh] rounded-lg  flex md:flex-row flex-col items-center justify-center mt-5`}>
<div className='md:w-[50%] w-full md:h-[80vh] h-[50vh]  flex items-center justify-center '>
<Image className='md:w-[280px] w-[300px]  h-[300px] md:h-[280px] rounded-full object-top shadow-2xl md:hover:scale-110 transition-all' src={profile} alt=''/>
</div>

<div  className='md:w-[50%] w-full md:h-[80vh] h-[50vh] flex items-center justify-center'>
<div className='w-full flex flex-col justify-center items-center font-medium text-gray-700'>
<h2 className='text-[1.3em]'>{greeting}</h2>

<h3 className='md:text-[1.6em] text-[1.4em] text-gray-800 font-semibold'>Frontend Developer</h3>
<div className='w-full min-h-[10vh] mt-5 px-3 flex items-center justify-center'>
<button className='px-5 py-2 min-w-[150px] h-12 text-gray-100 bg-gray-900 rounded-3xl transition-all hover:bg-gray-800 hover:shadow-2xl md:mx-3 mx-1'>
Download CV
    </button>

   <button className='px-5 py-2 min-w-[150px] h-12 text-gray-100 bg-gray-900 rounded-3xl transition-all hover:bg-gray-800 hover:shadow-2xl md:mx-3 mx-1'>
Contact me
    </button>
</div>
</div>
</div>
</div> */}











        </section>

    )
}

export default Welcome