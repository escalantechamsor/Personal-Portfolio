import React from 'react'
import mixturecuk from '@/img/mixturecuk.png';
import stereo from '@/img/stereo.png';
import villasort from '@/img/reservas.png';
import taskmanager from '@/img/taskmanager1.png';
import coinpayuclone from '@/img/coinpayuclone.png';
import newshomepage from '@/img/homepage.png';
import Link from 'next/link';
import HomeProjects from './home_projects';
import { project_details } from '@/components/projects_full/project_details'
function Projects() {

  return (
    <section className="w-full min-h-[90vh] pb-20 relative">
      <div className=" w-full flex items-center justify-center text-[2.2em] font-bold text-gray-800 mt-3">
        My Projects
      </div>
      <section className=' w-full mx-auto rounded-xl min-h-[90vh] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex-wrap gap-5 p-5 mt-2  '>
        <Link href={'/projects'} className='absolute right-5 bottom-5'>
          <button className="w-[150px] h-12 bg-gray-800 rounded-full text-gray-100 font-medium hover:bg-gray-700 transition-all  ">
            Check projects
          </button>
        </Link>
        {/* Main Project Cards */}
        <HomeProjects src={`${mixturecuk.src}`} tittle='Mixture Cuk' subtitle='Restaurant app' github='' />
        <HomeProjects src={`${stereo.src}`} tittle='Stereo Sound' subtitle='Music app' github={project_details[1].github} />
        <HomeProjects src={`${coinpayuclone.src}`} tittle='Coinpayu Clone' subtitle='Clone app' github={project_details[2].github} />
        <HomeProjects src={`${villasort.src}`} tittle='Villa Sort' subtitle='Reservations app' github={project_details[3].github} />
        <HomeProjects src={`${taskmanager.src}`} tittle='Task Manager' subtitle='CRUD app' github={project_details[4].github} />
        <HomeProjects src={`${newshomepage.src}`} tittle='News Homepage' subtitle='Challenge Frontend Mentor' github={project_details[5].github} />
      </section>
    </section>
  )
}

export default Projects