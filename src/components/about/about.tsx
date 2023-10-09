import React from 'react'
import profile from '@/img/perfil.jpg'
import newshomepage from '@/img/newshomepage.png'
import Image from 'next/image'
function About() {
    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center border-[1px] border-gray-100 mt-5  rounded-xl">
            <div className='lg:w-[80%] min-h-[70vh] flex items-center lg:flex-row flex-col px-4 p-3 bg-gray-100 shadow-lg rounded-xl '>
                <div className='lg:w-[50%] w-full h-[70vh]  flex items-center justify-center '>
                    <Image className='md:w-[280px] w-[300px] border-[1px] border-gray-300 h-[300px] md:h-[280px] rounded-full object-bottom shadow-2xl transition-all' src={profile} loading='lazy' alt='' />
                </div>
                <div className='lg:w-[50%] w-full lg:h-[40vh] rounded-xl flex items-center justify-center flex-col  p-4'>

                    <h3 className='text-[2em] font-bold text-gray-800'>About me</h3>
                    <p className='text-[1.1rem] font-medium mt-3  text-gray-600 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nemo architecto sit non veritatis, aperiam eveniet, ipsam perspiciatis perferendis in eligendi hic quaerat veniam rem voluptates fugiat, minima distinctio laboriosam.</p>
                </div>
            </div>

        </section>

    )
}

export default About