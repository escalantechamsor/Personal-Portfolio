import './globals.css'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar/navbar'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Personal portfolio online',
  keywords: 'portfolio, frontend developer, programming'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <main className='w-full min-h-[100vh] '>
       <Navbar />
      {children}
      </main>
      </body>
    </html>
  )
}
