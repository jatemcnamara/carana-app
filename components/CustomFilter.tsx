"use client"

import { CustomFilterInterface } from '@/types'
import { useState, Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useUpdateParams } from '@/hooks/useUpdateParams'

const CustomFilter = ({title, options, onChange} : CustomFilterInterface) => {
  const [selected, setSelected] = useState(options[0])
  const router = useRouter()

  const handleUpdateParams = (e: {title: string, value: string}) => {
      const newPathName = useUpdateParams(title, e.value.toLowerCase())
      
      router.push(newPathName)
  }
 
  return (
    <div className='relative w-fit py-1 rounded-xl font-nunitoLight bg-white shadow-md'>
      <Listbox
        value={selected}
        onChange={e => {
          setSelected(e)
          onChange(e.value)
          handleUpdateParams(e)
        }}
      >
        <div className='w-fit z-10'>
          <Listbox.Button className='flex flex-row items-center justify-between gap-4 mx-auto'>
            <span className='block, truncate pl-6'>
              {selected.title}
            </span>

            <Image src='/chevron-up-down.svg' width={20} height={20} alt='' className='mr-5'/>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave='ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='py-3 left-0 cursor-pointer'>
              {options.map(option => (
                <Listbox.Option 
                  key={option.title} 
                  value={option}
                  className={({active}) => `mt-2 ${active ? 'bg-sky-700 text-white' : 'bg-white'}`}
                >
                  {({selected}) => (
                    <span className='px-6'>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter