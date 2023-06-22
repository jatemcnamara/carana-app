"use client"

import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import { useState } from 'react'

export const metadata = {
  title: 'Carana',
  description: 'Rent your best car with Carana!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <html lang="en" className={`${isOpen ? 'overflow-hidden' : 'overflow-visible'}`}>
      <body className="relative">
        <Header handleOpen={setIsOpen}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
