"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import Link from 'next/link';

function FinishScreen({params}) {
  const {user} = useUser();
  const [course, setCourse] = useState([]);

  const router = useRouter();


  useEffect(()=>{
      params && GetCourse();
    },[params,user])


  const GetCourse=async()=>{

    const result = await db.select().from(CourseList).where(and(eq(CourseList.courseId,params?.courseId),eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))

    setCourse(result[0]);
    console.log(result);
  }
  return (
    <div className='px-10 md:px-20 lg:px-44 my:7'>
      <h2 className='text-center font-bold text-2xl my-3 text-purple-600'>Congrats! Your Course is ready</h2>
      <CourseBasicInfo course={course} refershData={()=>console.log()}/>
      <h2 className='mt-3'>Course Video : </h2>
      <h2 className='text-center rounded-md text-gray-600 border p-2 round flex gap-5 items-center bg-sky-100'>Now You see your course along with youtube video, notes, flashcards, quizes, and more.
      <Link href={("/course/"+course?.courseId)} 
      className="text-center text-blue-400 border p-2 rounded-xl flex gap-5 items-center justify-center bg-gray-300 hover:bg-green-300 transition"
      >View Course</Link>
      </h2>

    </div>
  )
}

export default FinishScreen