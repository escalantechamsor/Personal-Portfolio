import React from 'react'
import { BsGithub, BsLinkedin, } from 'react-icons/bs';
import { BiLogoGmail, BiSolidChevronDown } from 'react-icons/bi';
function ContactSocialMedia() {
    const listStyle = 'transition-all cursor-pointer hover:font-bold mr-5 flex items-center'
    const buttonStyle = 'w-12 h-12 hover:text-gray-50 bg-gray-100 text-gray-100 rounded-full transition-all flex items-center justify-center text-[2rem] shadow-xl hover:shadow-2xl hover:bg-gray-800 text-gray-800'
    return (
        <ul className='w-full flex items-center justify-center mt-3'>
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
  )
}

export default ContactSocialMedia