"use client"
import { CustomButtonPropsInterface } from '@/types'
import React from 'react'

const Button = ({title, containerStyles, btnType, handleClick}: CustomButtonPropsInterface) => {
  return (
    <button 
        disabled={false}
        type={btnType || 'button'}
        className={`w-2/6 max-w-xs min-w-150 h-10 bg-sky-700 text-white rounded-3xl ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default Button