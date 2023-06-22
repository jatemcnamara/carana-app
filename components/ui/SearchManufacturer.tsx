"use client"

import { SearchManufacturerInterface } from '@/types'
import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'

import { manufacturers } from '@/constants'

const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerInterface) => {
  const [query, setQuery] = useState('')
  const filteredManufacturers = 
    query === '' 
      ? manufacturers 
      : manufacturers.filter(item => (item.toLocaleLowerCase().replace(/\s+/g, "")
                     .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        ))

  
  return (
    <div className='search-manufacturer w-full sm:w-2/5'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Input 
            className='font-nunitoLight relative mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 px-3 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm' 
            placeholder='Brand' 
            displayValue={(manufacturer: string) => manufacturer}
            onChange={e => setQuery(e.target.value)}
          />

          <Transition 
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}>
              <Combobox.Options className='mt-3 ml-1 w-full absolute bg-white z-10 shadow-xl py-3 rounded-lg'>
                {filteredManufacturers.length === 0 && query !== '' 
                  ? (
                    <Combobox.Option value={query} className='search-manufacturer__option px-5'>
                      Oops... We couldn't find any "{query}" for rent
                    </Combobox.Option>
                  )
                  : (
                    filteredManufacturers.map(item => (
                      <Combobox.Option key={item} value={item} className={({active}) => `w-full px-3 mt-1 ${active ? 'bg-sky-700 text-white px-2' : 'bg-white px-2'}`}>
                         {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                      </Combobox.Option>
                    ))
                  )}
              </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer