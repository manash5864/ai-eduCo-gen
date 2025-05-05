import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React, { useState } from 'react'
import { HiPuzzle } from "react-icons/hi";
import EditCourseBasicInfo from './EditCourseBasicInfo';
import { storage } from '@/configs/firebaseConfig';
import Link from 'next/link';



function CourseBasicInfo({course, refershData, edit=true}) {
  
  const [selectedFile, setSelectedFile] = useState();
  const onFileSelected = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    const fileName = Date.now() + '.jpg'
    const storageRef = ref(storage,fileName)
    //4:04 time

    }


  return (
    <div className='p-10 border rounded-xl shadow-md mt-5'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
             <div>
               {/* one problem occur  */}
                <h2 className='font-bold text-2xl'>{course?.courseOutput?.course_name}
                {edit &&<EditCourseBasicInfo course={course} refershData={()=> refershData(true)}/>}</h2>
                <p className='text-md text-gray-400 mt-3'>{course?.courseOutput?.description}</p>
                <h2 className='font-medium mt-2 flex gap-2 items-center 
                text-gray-600'><HiPuzzle />{course?.category}</h2>
                  {!edit &&<Link href={'/course/'+course?.courseId+'/start'}>
                    <Button className="w-full mt-5 bg-purple-600">Start</Button>
                  </Link>}
             </div>
             <div >
              <label htmlFor='upload-image'>
                <Image src={ selectedFile?selectedFile: '/course.png'} width={300} height={300} className='w-full rounded-xl h-[210px] object-cover cursor-pointer'alt="no"/>
              </label>
                {edit &&<input type = "file" className="opacity-0" id="upload-image" onChange={onFileSelected}/>}
             </div>
         </div>
         
    </div>
  )
}

export default CourseBasicInfo

