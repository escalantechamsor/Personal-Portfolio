import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full h-[100vh] flex items-center justify-center flex-col'>
            <h1 className='text-[2em] font-extrabold text-gray-800'>
                Not Found
            </h1>
            <h2 className='text-[1.3em] font-medium text-gray-700 mt-3'>
                Could not find requested resource
            </h2>
            <Link href={'/'}>
                <button className='w-[200px] h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-100 mt-10'>Go Home</button>
            </Link>
        </div>
    )
}