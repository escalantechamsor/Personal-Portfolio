import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image';
import Link from 'next/link';
type Props = {
  src: string;
  tittle: string;
  subtitle: string;
  github?: string;

}

function HomeProjects({ src, tittle, subtitle, github }: Props) {
  const cardStyle = `h-[40vh] rounded-xl shadow-xl overflow-hidden ${styles.cards} relative cursor-pointer`

  return (
    <div className={`${cardStyle}`}>
      <Image className={`w-full h-[40vh] object-contain transition-all ${styles.img}`} src={src} alt={tittle} width={300} height={400} loading='lazy' />
      <div className={`${styles.details} hidden opacity-80 flex-col justify-between`}>
        <h4 className='text-[1.4rem] font-semibold text-gray-100 text-center w-full p-1 bg-gray-800 h-10'>{tittle}</h4>
        <div className='lg:flex flex-col hidden'>
          <h5 className='ml-4 font-semibold mt-1'>Description</h5>
          <p className='px-5 mt-2 text-gray-700'>{subtitle}</p>
        </div>
        <div className='w-full h-[12vh] flex items-center justify-end pr-5'>
          <button className='px-5 py-2 bg-gray-900 hover:bg-gray-800 hover:shadow-2xl text-gray-100 rounded-full w-32'>
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeProjects;


