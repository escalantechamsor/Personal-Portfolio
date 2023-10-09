import React from 'react'
import { BsGithub, BsLinkedin, } from 'react-icons/bs';
import { BiLogoGmail, BiSolidChevronDown } from 'react-icons/bi';
function Contact() {
    const listStyle = 'hover:text-gray-800 transition-all cursor-pointer hover:font-bold mr-5 flex items-center'
    const buttonStyle = 'w-16 h-16 hover:text-gray-50 bg-gray-800 text-gray-100 rounded-lg transition-all flex items-center justify-center text-[2rem] shadow-xl hover:shadow-2xl hover:bg-gray-900'
    return (

        <section id='contactme' className="w-full h-[100vh] flex items-center justify-center">
            <div className='w-full h-[80vh] bg-gray-800 rounded-xl flex items-center justify-center flex-col'>
                <h5 className="text-[2em] text-gray-100">CONTACT ME</h5>
                <div className='lg:w-[60%] w-[80%] h-[40vh] bg-gray-100 mt-5 rounded-xl shadow-xl flex items-center justify-center'>
                    <ul className='w-full flex items-center justify-center'>
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
            </div>
        </section>
    )
}

export default Contact