import React from 'react'
import { BsGit } from 'react-icons/bs';
import { FaHtml5, FaCss3, FaReact, FaBootstrap,FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMui } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiOutlineAntDesign } from 'react-icons/ai';


function Experience() {
    const listStyle = `flex items-center justify-start mt-2 hover:bg-gray-200 p-1 rounded-full hover:shadow-xl transition-all font-medium cursor-pointer text-[1.3em]`
    const skillStyle = `w-10 h-10 bg-gray-800 rounded-full mr-3 flex items-center justify-center text-gray-50`
    return (
        <section className='w-full min-h-[80vh] flex justify-center items-center flex-col'>
            <section className="flex items-center justify-center text-[2.5em] font-bold text-gray-800 my-7">
                Experience
            </section>
            <section className="w-full min-h-[50vh] flex lg:flex-row flex-col p-2 mb-10 items-center justify-center gap-5 lg:p-5 ">

                <section className="w-full min-h-[30vh] bg-gray-100 rounded-md border-[1px] border-gray-500">
                    <ul className='w-full grid grid-cols-2 min-h-[30vh] p-5  items-center justify-center gap-x-4'>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <FaHtml5 />
                            </span>
                            HTML5</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <FaCss3 />
                            </span>
                            CSS</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <SiJavascript />
                            </span>
                            Javascript</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <FaReact />
                            </span>
                            ReactJS</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <SiTypescript />
                            </span>
                            TypeScript</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <TbBrandNextjs />
                            </span>
                            NextJS</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <SiTailwindcss />
                            </span>
                            Tailwindcss</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <FaBootstrap />
                            </span>
                            Bootstrap</li>

                    </ul>







                </section>


                <section className="w-full min-h-[30vh] bg-gray-100 rounded-md border-[1px] border-gray-500">
                    <ul className='w-full grid grid-cols-2 min-h-[30vh] p-5  items-center justify-center gap-x-4'>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <BsGit />
                            </span>
                            GIT</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <FaNodeJs />
                            </span>
                            NodeJS</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <SiMui />
                            </span>
                            MUI</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <AiOutlineAntDesign />
                            </span>
                            Ant Design</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <SiTypescript />
                            </span>
                            TypeScript</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <TbBrandNextjs />
                            </span>
                            NextJS</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <SiTailwindcss />
                            </span>
                            Tailwindcss</li>
                        <li className={`${listStyle}`}>
                            <span className={`${skillStyle}`}>
                                <FaBootstrap />
                            </span>
                            Bootstrap</li>

                    </ul>







                </section>
            </section>
        </section>
    )
}

export default Experience