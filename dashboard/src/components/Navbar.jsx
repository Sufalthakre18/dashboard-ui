import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='w-full bg-slate-700 py-5'>
            <div className='flex justify-between px-4'>
                <div><h1 className='text-white text-2xl font-bold'><Link href={'/'}>Logo.in</Link></h1></div>
                <div className='text-stone-50 flex justify-between '>
                    <Link href={'/dashboard'} className='mr-6'>Dashboard</Link>
                    <Link href={'/courses'} className='mr-6'>Courses</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar