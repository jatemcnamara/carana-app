"use client"

import { CarModalInterface } from '@/types'
import Image from 'next/image'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { generalCarImageUrl } from '@/utils'

const CarDetailsModal = ({isOpen, closeModal, car}: CarModalInterface) => {
    return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}> 
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25 w-[100vw]'/>
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto max-w-[100vw]'>
                    <div className='flex min-h-full items-center justify-center text-center'>
                        <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='relative rounded-2xl my-10 bg-white w-4/5 lg:w-2/5 2xl:w-1/4 max-w-max shadow-xl flex flex-col p-8'>
                                <button type='button' onClick={closeModal} className='absolute top-5 right-5 z-10'>
                                    <Image src='/close.svg' alt='close' width={20} height={20} className='object-contain' />
                                </button>

                                <Image src={generalCarImageUrl(car)} width={2000} height={2000} alt='car' priority className='w-full h-auto mt-2'/>
                            
                                <div className='flex flex-row justify-between'>
                                    <Image src={generalCarImageUrl(car, '29')} width={2000} height={2000} alt='car' priority className='max-h-full w-[30%] h-auto'/>
                                    <Image src={generalCarImageUrl(car, '33')} width={2000} height={2000} alt='car' priority className='max-h-full w-[30%] h-auto'/>
                                    <Image src={generalCarImageUrl(car, '13')} width={2000} height={2000} alt='car' priority className='max-h-full w-[30%] h-auto'/>
                                </div>

                                <div className='flex-1 flex flex-col items-start gap-2 mt-5'>
                                    <h3 className='font-nunitoSemibold text-2xl mb-2'>{car.make[0].toUpperCase() + car.make.slice(1)} {car.model[0].toUpperCase() + car.model.slice(1)}</h3>

                                    {Object.entries(car).map(specification => (
                                        <p key={specification[0]} className='flex flex-row justify-between w-full'>
                                            <span>{(specification[0][0].toUpperCase() + specification[0].slice(1)).replace('_', ' ')}: </span> 
                                            {typeof specification[1] === 'number'
                                                ? <span>{specification[1]}</span>
                                                : specification[0] === 'transmission' 
                                                    ? <span>{specification[1] === 'a' ? 'Automatic' : 'Manual'}</span>
                                                    : <span>{specification[1][0].toUpperCase() + specification[1].slice(1)}</span>
                                            }
                                            
                                        </p>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default CarDetailsModal