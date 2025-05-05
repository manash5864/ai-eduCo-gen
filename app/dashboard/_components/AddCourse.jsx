// "use client";
// import { Button } from '@/components/ui/button';
// import { useUser } from '@clerk/nextjs'
// import Link from 'next/link';
// import React, { useContext } from 'react'
// import UserCourseList from './UserCourseList';
// import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

// function AddCourse() {
//   const {user}=useUser();
//   const {UserCourseList,setUserCourseList}= useContext(UserCourseListContext);
//   return (
//     <div className='flex item-center justify-between bg-gradient-to-br from-blue-100 to-white px-4 py-5 rounded-lg'>
//       <div>
//         <h2 className='text-2xl'>Hello, <span className='font-bold'>{user?.fullName}</span> </h2>
//         <p className='text-sm text-gray-500'>Create a new course with AI, share it with friends, and learn in a whole new way.</p>
//       </div>
//       <Link href = {UserCourseList>=5?'/dashboard/upgrade':'/create-course'}>
//         <Button>+ Create new Course </Button>
//       </Link>    
//     </div>
//   )
// }

// export default AddCourse


"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useContext } from "react";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";

function AddCourse() {
  const { user } = useUser();
  const { UserCourseList } = useContext(UserCourseListContext);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gradient-to-br from-white via-blue-50 to-purple-100 p-6 rounded-2xl shadow-lg">
      <div className="mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-gray-800">Hello, <span className="text-purple-600">{user?.fullName}</span></h2>
        <p className="text-sm text-gray-500 mt-1">
          Create a new AI course and explore modern learning.
        </p>
      </div>
      <Link href={UserCourseList >= 5 ? "/dashboard/upgrade" : "/create-course"}>
        <Button className="bg-purple-500 hover:bg-purple-600 text-white transition-all">
          + Create New Course
        </Button>
      </Link>
    </div>
  );
}

export default AddCourse;
