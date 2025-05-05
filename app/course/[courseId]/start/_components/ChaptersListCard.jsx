import React from 'react'
import { HiOutlineClock } from "react-icons/hi2";


function ChaptersListCard({chapter,index}) {
  return (
    <div className='grid grid-cols-5 p-4 items-center border-b  '>
      <div>
          <h2 className='p-1 w-8 h-8 text-center text-white rounded-full bg-purple-500 '>{index+1}</h2>
      </div>
      <div className='col-span-4 '>
         <h2 className='font-medium'>{chapter?.chapter_name}</h2>
         <h2 className='front-small text-sm flex items-center gap-2'><HiOutlineClock/>{chapter?.duration}</h2>
      </div>
    </div>
  )
}

export default ChaptersListCard