// "use client"
// import { db } from '@/configs/db'
// import { CourseList } from '@/configs/schema'
// import { useUser } from '@clerk/nextjs'
// import { eq } from 'drizzle-orm'
// import React, { useContext, useEffect, useState } from 'react'
// import CourseCard from './CourseCard'
// import { UserCourseListContext } from '@/app/_context/UserCourseListContext'

// function UserCourseList() {

//   const [courseList,setCourseList]=useState([]);
//   const {UserCourseList, setUserCourseList} = useContext(UserCourseListContext);
//   const {user} = useUser();


//   useEffect(()=>{
//     user&&getUserCourses();
//   },[user])  


//   const getUserCourses=async()=>{
//     const result = await db.select().from(CourseList).where(eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress))
//     setCourseList(result);
//     setUserCourseList(result);
//   }
//   return (
//     <div className='mt-10 '>
//       <h2 className='font-medium text-xl text-purple-400'>My Generated AI Courses</h2>

//       <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//         {courseList?.length>0?courseList?.map((course,index)=>(
//         <CourseCard course={course} key={index} refreshData={()=>getUserCourses()}/>
//         ))
//         :
//           [1,2,3,4,5].map((item,index)=>(
//             <div key={index} className='w-full bg-slate-200 
//             animate-pulse rounded-lg h-[270px] mt-5'></div>
//           ))
        
//       }
//       </div>

//     </div>
//   )
// }

// export default UserCourseList


"use client";
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

function UserCourseList() {
  const [courseList, setCourseList] = useState([]);
  const { setUserCourseList } = useContext(UserCourseListContext);
  const { user } = useUser();

  useEffect(() => {
    user && getUserCourses();
  }, [user]);

  const getUserCourses = async () => {
    const result = await db.select().from(CourseList).where(eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress));
    setCourseList(result);
    setUserCourseList(result);
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-purple-600 mb-6"> My Generated AI Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseList?.length > 0 ? (
          courseList.map((course, index) => (
            <CourseCard course={course} key={index} refreshData={getUserCourses} />
          ))
        ) : (
          [1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-full h-[270px] rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 animate-pulse shadow-inner"
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserCourseList;
