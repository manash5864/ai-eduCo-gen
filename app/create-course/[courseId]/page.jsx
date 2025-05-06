// "use client"
// import { db } from '@/configs/db';
// import { Chapters, CourseList } from '@/configs/schema';
// import { useUser } from '@clerk/nextjs'
// import { and, eq } from 'drizzle-orm';
// import React, { useEffect, useState } from 'react'
// import CourseBasicInfo from './_components/CourseBasicInfo';
// import CourseDetail from './_components/CourseDetail';
// import ChapterList from './_components/ChapterList';
// import { Button } from '@/components/ui/button';
// import { GenerateChapterContent_AI } from '@/configs/AiModel';
// import LoadingDialog from '../_components/LoadingDialog';
// import service from '@/configs/service';
// import { useRouter } from 'next/navigation';      


// function CourseLayout({params}) {
//   const {user} = useUser();
//   const [course, setCourse] = useState([]);
//   const [loading,setLoading] = useState(false);
//   const router = useRouter();


//   useEffect(()=>{
//       params && GetCourse();
//     },[params,user])


//   const GetCourse=async()=>{

//     const result = await db.select().from(CourseList).where(and(eq(CourseList.courseId,params?.courseId),eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))

//     setCourse(result[0]);
//     console.log(result);
//   }
  


// const GenerateChapterContent = async () => {
//   setLoading(true);
//   const chapters = course?.courseOutput?.chapters;

//   try {
//     for (let index = 0; index < chapters.length; index++) {
//       const chapter = chapters[index];
//       const PROMPT = `Explain the concept in detail on the Topic: ${course?.course_name}, Chapters: ${chapter?.chapter_name}, in JSON Format with list of array with field as title, explanation on given chapter in details, Code Example (Code field in <precode> format) if applicable`;

//       console.log("Prompt:", PROMPT);

//       // Step 1: Refine YouTube Search Query
//       const videoSearchPrompt = `You are given a course title and a chapter name. Suggest the best YouTube search query to find an educational video relevant to the topic.
//         Course Title: "${course?.course_name}"
//         Chapter: "${chapter?.chapter_name}"
//         Only output the ideal YouTube search query.`;

//       const videoQueryResult = await GenerateChapterContent_AI.sendMessage(videoSearchPrompt);
//       const refinedSearchQuery = videoQueryResult?.response?.text()?.trim();
//       console.log('Refined YouTube Search Query:', refinedSearchQuery);

//       // Step 2: Get videos
//       const videos = await service.getVideos(refinedSearchQuery);
//       const videoId = videos[0]?.id?.videoId || '';

//       // Step 3: Generate content
//       const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
//       const content = JSON.parse(result?.response?.text());

//       // Step 4: Save to DB
//       await db.insert(Chapters).values({
//         chapterId: index,
//         courseId: course?.courseId,
//         content: content,
//         videoId: videoId,
//       }).returning({ id: Chapters.id });

//       console.log(`Saved Chapter ${index}`);
//     }

//     // ✅ After all chapters are saved
//     await db.update(CourseList).set({ publish: true }).where(eq(CourseList.courseId, course?.courseId));

//     // ✅ Redirect after generation complete
//     router.replace(`/create-course/${course?.courseId}/finish`);
//   } catch (e) {
//     console.error("Error generating chapters:", e);
//   } finally {
//     setLoading(false);
//   }
// };



//   return (
//     <div className='mt-10 px-7 md:px-20 lg:px-44'>
//       <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

//       <LoadingDialog loading={loading}></LoadingDialog>
//       {/* basic info */}
//       <CourseBasicInfo course = {course} refershData={()=> GetCourse()}/>


//       {/* course detail */}
//       <CourseDetail course = {course}/>



//       {/* list of chapters */}
//       <ChapterList course = {course} refreshData={()=> GetCourse()}/>
//       <Button onClick={GenerateChapterContent} className="my-10">Generate the course content</Button>
//     </div>
//   ) 
// }

// export default CourseLayout







"use client"
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';
import { Button } from '@/components/ui/button';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import LoadingDialog from '../_components/LoadingDialog';
import service from '@/configs/service';
import { useRouter } from 'next/navigation';      


function CourseLayout({params}) {
  const {user} = useUser();
  const [course, setCourse] = useState([]);
  const [loading,setLoading] = useState(false);
  const router = useRouter();


  useEffect(()=>{
      params && GetCourse();
    },[params,user])


  const GetCourse=async()=>{

    const result = await db.select().from(CourseList).where(and(eq(CourseList.courseId,params?.courseId),eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))

    setCourse(result[0]);
    console.log(result);
  }
  


  const GenerateChapterContent = async () => {
  setLoading(true);
  const chapters = course?.courseOutput?.chapters;

  try {
    for (let index = 0; index < chapters.length; index++) {
      const chapter = chapters[index];
      const PROMPT = `Explain the concept in detail on the Topic: ${course?.course_name}, Chapters: ${chapter?.chapter_name}, in JSON Format with list of array with field as title, explanation on given chapter in details, Code Example (Code field in <precode> format) if applicable`;

      console.log("Prompt:", PROMPT);

      let videoId = '';

      // ✅ Step 1: Use Gemini to generate a better search query
      const videoSearchPrompt = `You are given a course title and a chapter name. Suggest the best YouTube search query to find an educational video relevant to the topic.
        Course Title: "${course?.course_name}"
        Chapter: "${chapter?.chapter_name}"
        Only output the ideal YouTube search query.`;


      
      const videoQueryResult = await GenerateChapterContent_AI.sendMessage(videoSearchPrompt);
      const refinedSearchQuery = videoQueryResult?.response?.text()?.trim();
      console.log('Refined YouTube Search Query:', refinedSearchQuery);



      // ✅ Step 2: Use the refined query to get videos
      const videos = await service.getVideos(refinedSearchQuery);
      videoId = videos[0]?.id?.videoId || '';



      // Get Gemini AI content
      const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
      const content = JSON.parse(result?.response?.text());

      // Save to DB
      await db.insert(Chapters).values({
        chapterId: index,
        courseId: course?.courseId,
        content: content,
        videoId: videoId,
      }).returning({ id: Chapters.id });

      console.log(`Saved Chapter ${index}`);
    }

    // Publish Course
    await db.update(CourseList).set({ publish: true }).where(eq(CourseList.courseId, course?.courseId));
    router.replace('/create-course/' + course?.courseId + "/finish");
  } catch (e) {
    console.error("Error generating chapters:", e);
  } finally {
    setLoading(false);
  }
};




  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

      <LoadingDialog loading={loading}></LoadingDialog>
      {/* basic info */}
      <CourseBasicInfo course = {course} refershData={()=> GetCourse()}/>


      {/* course detail */}
      <CourseDetail course = {course}/>



      {/* list of chapters */}
      <ChapterList course = {course} refreshData={()=> GetCourse()}/>
      <Button onClick={GenerateChapterContent} className="my-10">Generate the course content</Button>
    </div>
  ) 
}

export default CourseLayout