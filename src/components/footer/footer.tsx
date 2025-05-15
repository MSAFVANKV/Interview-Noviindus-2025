import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className=' bg-main sm:py-20  py-10 md:px-20 sm:px-8 px-3 space-y-7 grid grid-cols-6'>

        {/* 1. logo */}
        <div className="flex items-center gap-2 col-span-2 bg-amber-50">
          <div className="w-10 h-10 relative">
            <Image fill alt="logo" src={`/logo/logo.svg`} />
          </div>
          <h1 className="text-xl font-bold text-white">Educare</h1>
        </div>

        {/* 2 */}
        <div className="bg-amber-100 w-full"></div>

          {/* 3 */}
          <div className="bg-amber-200 w-full"></div>

            {/* 4 */}
        <div className="bg-amber-300 w-full col-span-2"></div>
        origin  git@github.com:MSAFVANKV/Iv-Noviindus-2025.git
            
    </footer>
  )
}

export default Footer