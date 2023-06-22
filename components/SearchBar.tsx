"use client"

import SearchButton from "./ui/SearchButton"
import SearchManufacturer from "./ui/SearchManufacturer"
import { useState } from "react"
import { useRouter } from "next/navigation"
import CustomFilter from "./CustomFilter"
import { fuels, yearsOfProduction } from "@/constants"
import Button from "./ui/Button"

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState('')

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (manufacturer === '' && model === ''){
      alert('Please fill the search parameters')
    }

    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase())
  }

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if (manufacturer){
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    if (model){
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if (fuel){
      searchParams.set('fuel', fuel)
    } else {
      searchParams.delete('fuel')
    }

    if (year !== ''){
      searchParams.set('year', year)
    } else {
      searchParams.delete('year')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName)
  }

  return (
    <form className='searchbar flex flex-col lg:flex-row justify-between' onSubmit={handleSearch}>
      <div className="searchbar__items w-full lg:w-3/5 xl:w-2/5 flex flex-col sm:flex-row items-start justify-start gap-4"> 
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        
        <input 
          type="text" 
          className="font-nunitoLight relative mt-1 max-h-60 w-full sm:w-2/5 overflow-auto rounded-xl bg-white py-1 px-3 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" 
          name="model" 
          value={model} 
          onChange={e => setModel(e.target.value)} 
          placeholder="Model"
        />
        
        <SearchButton otherStyles='hidden sm:inline-block'/>
      </div>

      <div className="search-filters flex flex-row items-start lg:justify-end mt-4 lg:mt-0 gap-5 lg:gap-10 lg:w-2/5">
        <CustomFilter title='fuel' options={fuels} onChange={setFuel}/>
        <CustomFilter title='year' options={yearsOfProduction} onChange={setYear}/>
      </div>

      <Button title="Search" containerStyles='inline-block sm:hidden mt-5 text-white font-nunitoLight h-9 w-[10%]' btnType='submit'/>
    </form>
  )
}

export default SearchBar