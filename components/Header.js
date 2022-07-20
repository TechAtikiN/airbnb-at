import React from 'react'
import Image from 'next/image'
// import {SearchIcon} from '@heroicons/react'
export default function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-5 md:px-10'>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit='contain'
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search'/>
        <svg xmlns="http://www.w3.org/2000/svg" className='hidden md:inline-flex  h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'  viewBox="0 0 20 20" fill="currentColor">
  <path  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
</svg>
      </div>

      

      {/* right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
</svg>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
  <path  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
</svg>
        </div>
      </div>
    </header>
  )
}
