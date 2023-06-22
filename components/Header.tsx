"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)



  const handleOpen = (value: boolean) => {
    setIsOpen(value)

    if (value){
      document.body.classList.add('overflow-hidden')
    } else{
      document.body.classList.remove('overflow-hidden')
    }
    
  }

  return (
    <header className='w-4/5 max-w-max mx-auto h-20 flex flex-row justify-between items-center'>
      <span className='z-30 font-nunitoRegular text-4xl text-sky-700'>Carana</span>
      
      <div className='navigation-container flex flex-row justify-end items-center gap-5'>

        <nav className={`${isOpen ? 'left-0 font-nunitoRegular' : 'hidden lg:flex'} absolute lg:relative bg-white lg:opacity-100 items-center justify-start lg:justify-end p-10 lg:p-0 w-[100vw] lg:w-auto h-[100vh] lg:h-full top-0 z-20 flex flex-col lg:flex-row gap-10 text-xl opacity-95 font-nunitoLight`}>
          <Link href="/" className='z-30 mt-[175px] lg:mt-0'>Catalogue</Link>
          <Link href="/" className='z-30 '>About us</Link>
          <Link href="/" className='z-30 '>Contacts</Link>
        </nav>

        <div className="space-y-[6px] h-[18px] relative z-30 lg:hidden" onClick={() => handleOpen(!isOpen)}>
          <span className={`${isOpen ? 'origin-top-left rotate-[45deg] mb-[7px]' : ''} transition duration-200 block w-7 h-[2px] bg-gray-400`}></span>
          <span className={`${isOpen ? 'hidden' : ''} block w-9 h-[2px] bg-gray-400`}></span>
          <span className={`${isOpen ? 'origin-bottom rotate-[-45deg] ml-[-4px]' : ''} transition duration-200 block w-7 h-[2px] bg-gray-400`}></span>
        </div>
      </div>
    </header>
  )
}

export default Header