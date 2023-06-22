import React from 'react'
import Image from 'next/image'

const SearchButton = ({ otherStyles }: {otherStyles?: string}) => {
  return (
    <button type='submit' className={`z-10 ${otherStyles}`}>
        <Image src='magnifying-glass.svg' width={40} height={40} alt=''/>
    </button>
  )
}

export default SearchButton