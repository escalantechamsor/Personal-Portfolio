import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Portfolio | Projects',
  description: 'Displayed all my personal projects',
}


export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}