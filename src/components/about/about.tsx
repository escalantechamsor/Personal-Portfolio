import React from 'react';
import profile from '@/img/profile.png';
import Image from 'next/image';
import styles from './about.module.css'
function About() {
    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center border-[1px] border-gray-200 my-5 rounded-xl shadow-lg">
            <div className='lg:w-[80%] min-h-[70vh] flex items-center lg:flex-row flex-col px-4 p-3  rounded-xl '>
                <div className='lg:w-[50%] w-full h-[70vh]  flex items-center justify-center '>
                    <Image className='md:w-[280px] w-[300px]  h-[300px] md:h-[280px] object-bottom lg:hover:w-full lg:hover:h-[100%] hover:rounded-none rounded-full transition-all' src={profile} loading='lazy' alt='' />
                </div>
                <div className='lg:w-[50%] w-full lg:h-[60vh] rounded-xl p-4 flex items-center justify-center flex-col min-h-[40vh] '>
                    <h3 className='text-[2em] font-bold text-gray-800'>About me</h3>
                    <p className='text-[1.1rem] font-medium mt-3 text-gray-600 '>
                        Frontend developer con más de 3 años de experiencia. Apasionado del diseño y desarrollo web en general.
                        Considero que la mejor forma de aprender es compartir lo que sabes y a la par crecer como profesional y de paso, disfrutarlo.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default About