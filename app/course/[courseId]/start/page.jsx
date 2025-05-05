"use client"
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { and, eq } from 'drizzle-orm'
import { index } from 'drizzle-orm/gel-core'
import React, { useEffect, useState } from 'react'
import ChaptersListCard from './_components/ChaptersListCard'
import ChapterContent from './_components/ChapterContent'
import StudyMeterialSection from './_components/StudyMeterialSection'
import { useParams } from 'next/navigation'

function CourseStart({params}) {

    const [course, setCourse] = useState();
    const {courseId} = useParams();
    const [selectedChapter, setSelectedChapter] = useState();
    const [chapterContent, setChapterContent] = useState();
    

    useEffect(()=>{
        GetCourse();
    },[])
    const GetCourse=async()=>{
        const result = await db.select().from(CourseList)
        .where(eq(CourseList?.courseId,params?.courseId));
        setCourse(result[0]);
        GetSelectedChapterContent(0);
        const results = await axios.get('/api/courses?courseId='+courseId);
        console.log(result)
        setCourse(results.data.results)
    }
    
    const GetSelectedChapterContent=async(chapterId)=>{
        const result = await db.select().from(Chapters)
        .where(and(eq(Chapters.chapterId,chapterId),
        eq(Chapters.courseId,course?.courseId)));
        setChapterContent(result[0]);
        console.log(result);
    }



  return (
    <div>
        {/* chapter list side bar */}
        <div className='fixed md:w-70 hidden md:block h-screen border-r
        shadow-md bg-gray-100 overflow-y-scroll '>
            <h2 className='font-medium text-lg bg-gray-300 text-blue-700 p-4 '>{course?.courseOutput?.course_name}</h2>
            <div>
                {course?.courseOutput?.chapters.map((chapter,index)=>(
                    <div key={index} className={`cursor-pointer 
                    hover:bg-purple-100
                    ${selectedChapter?.chapter_name == chapter?.chapter_name && 
                    'bg-purple-200'}`} 
                    onClick={()=>{setSelectedChapter(chapter);
                    GetSelectedChapterContent(index)
                    }}>
                        <ChaptersListCard chapter={chapter} index={index}/>
                    </div>
                ))}
            </div>
        </div>


        {/* content div */}
        <div className='md:ml-65 md:mr-65 p-2'>
            <ChapterContent chapter={selectedChapter}
            content={chapterContent}
            />
        </div>


        {/* right bar section */}
        <div className="fixed right-0 top-0 hidden md:flex flex-col w-72 h-screen border-l shadow-md bg-white z-10">
            <h2 className="font-medium text-lg bg-gray-300 text-blue-700 p-4">Study Meterials</h2>
            <div className="flex-1 overflow-y-auto p-4">
            <StudyMeterialSection courseId={courseId} course={course}/>
            <p>This is the right sidebar content.</p>
            </div>
        </div>
    </div>
  )
}

export default CourseStart