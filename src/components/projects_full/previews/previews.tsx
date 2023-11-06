import React from 'react'
import styles from './previewes_projects.module.css'
import Image from 'next/image'
import coctails from '@/img/previews/coctails.jpg';
import coinpayu_clone from '@/img/previews/coinpayu_clone.jpg';
import mixturecuk from '@/img/previews/mixturecuk.jpg';
import musala_soft from '@/img/previews/musala-soft.png';
import news_homepage from '@/img/previews/news_homepage.png';
import stereo_sound from '@/img/previews/stereo_sound.jpg';
import taskifun from '@/img/previews/taskifun.png';
import youtube_clone from '@/img/previews/youtube_clone.png';
import villasort from '@/img/previews/villasort.jpg';

function PreviewsProjects() {
    return (
        <section className='w-full min-h-[100vh] overflow-hidden md:flex flex-col hidden'>
            <h2 className='lg:text-[2rem] text-center font-bold text-gray-700 my-10'>
                Previews
            </h2>
            <ul className={`w-[900%] rounded-xl h-[100vh] flex ${styles.slider_list}`}>
                <li>
                    <Image className='w-full h-[100%] ' src={mixturecuk} alt='Image of a main page' priority />
                </li>
                <li>
                    <Image className='w-full h-[100%] ' src={villasort} alt='Image of a main page' priority />
                </li>
                <li>
                    <Image className='w-full h-[100%]  ' src={coinpayu_clone} alt='Image of a main page' priority />
                </li>
                <li>
                    <Image className='w-full h-[100%] ' src={musala_soft} alt='Image of a main page' priority />
                </li>
                <li>
                    <Image className='w-full h-[100%] ' src={taskifun} alt='Image of a main page' priority />
                </li>
                <li>
                    <Image className='w-full h-[100%] ' src={stereo_sound} alt='Image of a main page' priority />
                </li>
                <li>
                    <Image className='w-full h-[100%]  ' src={youtube_clone} alt='Image of a main page' priority />
                </li>
                <li>
                    <Image className='w-full h-[100%] ' src={news_homepage} alt='Image of a main page' priority />
                </li>
                <li>
                    <Image className='w-full h-[100%] ' src={coctails} alt='Image of a main page' priority />
                </li>
            </ul>
        </section>
    )
}

export default PreviewsProjects