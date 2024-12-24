import React from 'react'

export default function ColorPicker() {
  return (
    <div className='flex space-x-3'>
         <div className="flex items-center rounded-full border-2 border-[#96a3b3] p-2 cursor-pointer bg-black"></div>
         <div className="flex items-center rounded-full border-2 border-[#96a3b3] p-2 cursor-pointer bg-[#AABBCC]"></div>
         <div className="flex items-center rounded-full border-2 border-[#96a3b3] p-2 cursor-pointer bg-[#AABBCD]"></div>
    </div>
  )
}
