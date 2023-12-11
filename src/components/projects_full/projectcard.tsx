import React from 'react'
import styles from './projects.module.css';
import Image from 'next/image';

type Props = {
    src: string;
    tittle: string;
    subtitle: string;
}

function ProjectCard({ src, tittle, subtitle }: Props) {
    return (
        <div className={`${styles.projectcard} shadow-lg cursor-pointer `}>
            <div className={`${styles.cardfront}`}>
                <p className={`${styles.title}`}>{tittle}</p>
                <p className={`${styles.subtitle}`}>{subtitle}</p>
            </div>
            <div className={`${styles.cardback} relative`}>
                <Image className='w-full h-[100%] object-contain transition-all' src={src} alt='Vista principal de proyecto creado' width={300} height={400} priority />
            </div>
        </div>
    )
}

export default ProjectCard