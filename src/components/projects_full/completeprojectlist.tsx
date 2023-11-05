import React, { Fragment } from 'react';
import styles from './projects.module.css';
import stereo from "@/img/stereo.png";
import taskmanager from "@/img/taskmanager.png";
import coinpayu from "@/img/coinpayuclone.png";
import reservas from "@/img/reservas.png";
import homepage from "@/img/homepage.png";
import task from "@/img/task-form.png";
import mixturecuk from "@/img/mixturecuk.png";
import cloneyoutube from "@/img/cloneyoutube.png";
import musala from '@/img/musala.png'
import ProjectCard from './projectcard';

function CompleteProjectList() {
    return (
        <Fragment>

            <div
                className={`w-[88%] mx-auto min-h-[100vh] rounded-xl mb-12 bg-gray-100  shadow-xl grid lg:grid-cols-3 md:grid-cols-2 gap-8 border-t-2 lg:p-5 p-7 ${styles.wall}`}>

                <ProjectCard src={`${stereo.src}`} tittle='Stereo Sound' subtitle='Music app' />
                <ProjectCard src={`${taskmanager.src}`} tittle='Task Manager' subtitle='CRUD app' />
                <ProjectCard src={`${coinpayu.src}`} tittle='Coinpayu Clone' subtitle='Clone app' />
                <ProjectCard src={`${reservas.src}`} tittle='Villa Sort' subtitle='Reservations app' />
                <ProjectCard src={`${homepage.src}`} tittle='News Homepage' subtitle='Challenge Frontend Mentor' />
                <ProjectCard src={`${task.src}`} tittle='Taskifun' subtitle='CRUD app' />
                <ProjectCard src={`${mixturecuk.src}`} tittle='Mixture Cuk' subtitle='Restaurant app' />
                <ProjectCard src={`${cloneyoutube.src}`} tittle='Youtube Clone' subtitle='Clone app' />
                <ProjectCard src={`${musala.src}`} tittle='Musala Soft Clone Improvements' subtitle='Clone app' />
            </div>
        </Fragment>

    )
}

export default CompleteProjectList