"use client"

import Image from 'next/image'

const MainBanner = () => {
  const handleScroll = () => {

  }

  return (
    <div className='lg:flex flex-row justify-between items-center mt-16 relative'>
        <div className='w-full lg:w-2/5'>
            <h1 className='text-center lg:text-left text-4xl font-nunitoSemibold'>Rent your best car with Carana</h1>

            <p className='text-center lg:text-left text-xl font-nunitoRegular mt-4 lg:mt-10 w-full lg:w-4/6'>Explore hundreds of cars in a couple of clicks!</p>
        </div>

        <Image alt='' src='/x5-banner.png' width={2000} height={2000} className='w-full lg:w-3/5  max-w-5xl mt-6 lg:mt-0' priority />
    </div>
  )
}

export default MainBanner