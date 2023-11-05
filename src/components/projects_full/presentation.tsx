import React, { Fragment } from 'react'
import styles from './projects.module.css'

function Presentation() {
    return (
        <Fragment>
            <div className={`${styles.cardpresentation} w-[88%] mx-auto h-[90vh]  bg-gray-100 mb-12 rounded-xl flex items-center justify-center`}>
                <div className={`${styles.card} lg:w-[70%] w-[80%] lg:h-[60vh] h-[30vh] flex items-center justify-center relative`}>
                   <h2 className='font-extrabold text-gray-700 lg:text-[2.5em] md:text-[2em] text-[1.5em] text-center'>
                    My Personal Projects
                   </h2>
                </div>
            </div>
        </Fragment>
    )
}
export default Presentation;