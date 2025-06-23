import Link from 'next/link'
import React from 'react'
import { FaSignInAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className='px-4 shadow-sm'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center h-16'>
          <div className=''>
            <Link href='/'>&Gamma;&Delta;&Beta;</Link>
          </div>
          <div className='flex gap-4'>
              <Link href='properties/properties' className='hover:text-stone-500'>Properties</Link>
              <Link href='properties/post' className='hover:text-stone-500'>Post</Link>
              <Link href='properties/dashboard' className='hover:text-stone-500'>Dashboard</Link>
          </div>
          <div>
              <Link href='/auth/signin'>
                <FaSignInAlt className='hover:text-stone-500' />
              </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
