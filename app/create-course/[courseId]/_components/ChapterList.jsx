import React from 'react'
import { HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi2";
import EditChapters from './EditChapters';


function ChapterList({course, refreshData, edit=true}) {
  return (
    <div className='mt-3'>
        <h2 className='font-medium text-xl'>Chapters</h2>
        <div className='mt-2'>
            {course?.courseOutput?.chapters.map((chapter,index)=>(
              <div className='border p-5 rounded-lg mb-2 flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <h2 className='bg-purple-600 flex-none h-10 w-10 text-white rounded-full text-center p-2'>{index+1}</h2>
                    <div>
                      <h2 className='font-medium text-lg'>{chapter?.chapter_name} 
                      {edit &&<EditChapters course={course} index={index} refreshData={refreshData}/>}</h2>
                      <p className='text-sm text-gray-400'>{chapter?.about}</p>
                      <p className='flex gap-2 text-purple-600 items-center'> <HiOutlineClock/> {chapter?.duration}</p>
                    </div>
                </div>
                <HiOutlineCheckCircle className='text-4xl text-gray-300 flex-none' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChapterList