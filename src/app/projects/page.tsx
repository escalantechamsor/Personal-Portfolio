import CompleteProjectList from '@/components/projects_full/completeprojectlist'
import Presentation from '@/components/projects_full/presentation'
import PreviewsProjects from '@/components/projects_full/previews/previews'
import React from 'react'

function OwnProjects() {
  return (
    <section className='w-full min-h-[180vh]  mt-[13vh] mb-20'>
      <Presentation />
      <CompleteProjectList />
      <PreviewsProjects />
    </section>
  )
}

export default OwnProjects