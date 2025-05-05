import React from 'react'
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineClock,HiOutlinePlay,HiOutlineMenuAlt2   } from "react-icons/hi";
function CourseDetail({course}) {
  return (
        <div className="border p-6 rounded-xl shadow-md mt-3 ">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <div className='flex gap-2'>
                    <HiOutlineChartBar className='text-4xl'/>
                    <div>
                        <h2 className="text-xs text-gray-500">Skill Level</h2>
                        <h2 className="font-medium text-lg">{course?.level}</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <HiOutlineClock className='text-4xl'/>
                    <div>
                        <h2 className="text-xs text-gray-500">Duration</h2>
                        <h2 className="font-medium text-lg">{course?.courseOutput?.duration}</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <HiOutlineMenuAlt2  className='text-4xl'/>
                    <div>
                        <h2 className="text-xs text-gray-500">No of Chapters</h2>
                        <h2 className="font-medium text-lg">{course?.courseOutput?.number_of_chapters}</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <HiOutlinePlay  className='text-4xl'/>
                    <div>
                        <h2 className="text-xs text-gray-500">Video</h2>
                        <h2 className="font-medium text-lg">{course?.includeVideo}</h2>
                    </div>
                </div>
             </div>
        </div>
    
  )
}

export default CourseDetail