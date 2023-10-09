import React from 'react'
import Image from "next/image";
import mixturecuk from '@/img/mixturecuk.png';
import stereo from '@/img/stereo.png';
import villasort from '@/img/reservas.png';
import taskmanager from '@/img/taskmanager1.png';
import coinpayuclone from '@/img/coinpayuclone.png';
import newshomepage from '@/img/homepage.png';
import Link from 'next/link';
import styles from './projects.module.css'
function Projects() {
  const cardStyle = `h-[40vh] rounded-lg shadow-xl min-w-[300px] overflow-hidden ${styles.cards} relative cursor-pointer`
  return (
    <section className="w-full min-h-[100vh] pb-20 relative">
      <div className=" w-full flex items-center justify-center text-[2.2em] font-bold text-gray-800 mt-7">
        My Projects
      </div>
      <section className='lg:w-[90%] mx-auto rounded-xl min-h-[90vh] grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:p-5 p-10 mt-5 bg-gray-100 '>
        <Link href={'/projects'} className='absolute right-12 bottom-2'>
          <button className="w-[150px] h-12 bg-gray-800 rounded-full text-gray-100 font-medium hover:bg-gray-700 transition-all  ">
            Check projects
          </button>
        </Link>
        <div className={`${cardStyle}`}>
          <Image className="w-full h-[40vh] transition-all" src={mixturecuk} alt="MixtureCuk project" />

       <div className='w-full h-[40vh]   flex items-end absolute top-0 left-0'>
        <div className='w-full h-[15vh] bg-gray-100 opacity-1 flex items-center justify-between flex-col'>
          <h1 className='text-[1.3rem] pt-2'>
Mixture Cuk
          </h1>
          <div className='w-full h-[8vh] flex items-center justify-around px-5 p-2' >
<button className='px-4 py-2 rounded-full bg-gray-900 w-[120px] text-gray-100'>
  GitHub
  </button><button className='px-4 py-2 rounded-full bg-gray-900 w-[120px] text-gray-100'>
Demo
  </button>
          </div>

        </div>
       </div>
        </div>
        <div className={`${cardStyle}`}>
          <Image className="w-full h-[40vh] transition-all" src={stereo} alt="Stereo sound project" />
        </div>
        <div className={`${cardStyle}`}>
          <Image className="w-full h-[40vh] transition-all" src={coinpayuclone} alt="Coinpayu clone project" />
        </div>
        <div className={`${cardStyle} flex items-center justify-center`}>
          <Image className="w-full h-[35vh] transition-all" src={villasort} alt="MixtureCuk project" />
        </div>
        <div className={`${cardStyle}`}>
          <Image className="w-full h-[40vh] transition-all ml-5" src={taskmanager} alt="MixtureCuk project" />
        </div>
        <div className={`${cardStyle}`}>
          <Image className="w-full h-[40vh] transition-all" src={newshomepage} alt="MixtureCuk project" />
        </div>
      </section>





    </section>
  )
}

export default Projects