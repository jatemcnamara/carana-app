"use client"

import { CarCardInterface } from '@/types'
import { useState }  from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import { calculateCarRent, generalCarImageUrl } from '@/utils'
import CarDetailsModal from './CarDetailsModal'

interface CarCardPropsInterface {
    car: CarCardInterface
}

const CarCard = ({car}: CarCardPropsInterface) => {
  const {city_mpg, year, make, model, transmission, drive} = car

  const carRent = calculateCarRent(city_mpg, year)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='group w-full sm:w-[45%] lg:w-[30%] shadow-2xl rounded-xl p-6 flex flex-col align-start justify-start gap-3'>
        <h3 className='max-h-[30px] overflow-hidden font-nunitoRegular text-[20px]'>{`${make[0].toUpperCase() + make.slice(1)} ${model[0].toUpperCase() + model.slice(1)} ${year}`}</h3>

        <p className='flex text-[32px] font-nunitoSemibold'>
            <span className='self-start text-[16px] font-nunitoRegular'>$</span>
            {carRent}
            <span className='self-end text-[16px] font-nunitoRegular'>/day</span>
        </p>
        
        <div className='relative w-full 2xl:h-40 my-3 flex justify-center'>
            <Image src={generalCarImageUrl(car)} width={2000} height={2000} alt='car' priority className='max-h-full w-full h-auto 2xl:w-auto'/>
        </div>

        <div className='relative w-full xl:px-8'>
            <div className='flex group-hover:invisible w-full justify-between'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='/steering-wheel.svg' width={20} height={20} alt=''/>
                    <p className='text-14px'>
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='/tire.svg' width={20} height={20} alt=''/>
                    <p className='text-14px'>
                        {drive.toUpperCase()}
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='/gas.svg' width={20} height={20} alt=''/>
                    <p className='text-14px'>
                        {city_mpg} MPG
                    </p>
                </div>
            </div>

            <div className='hidden group-hover:flex absolute bottom-0 left-[10%] 2xl:left-[20%] z-10 h-4/5 w-4/5 2xl:w-3/5'>
                <Button title='View More' handleClick={() => setIsOpen(true)} containerStyles='w-full max-w-full text-[18px] roundet-full bg-sky-700 text-white h-full'/>
            </div>
        </div>

        <CarDetailsModal isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
    </div>
  )
}

export default CarCard