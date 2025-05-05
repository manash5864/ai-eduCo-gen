// import Image from 'next/image'
// import React from 'react'
// import { HiOutlineBookOpen } from "react-icons/hi2";
// import { HiMiniEllipsisVertical } from "react-icons/hi2";
// import { CiCalendarDate } from "react-icons/ci";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import DropDownOption from './DropDownOption';
// import { db } from '@/configs/db';
// import { CourseList } from '@/configs/schema';
// import { eq } from 'drizzle-orm';
// import Link from 'next/link';
// import Course from '@/app/course/[courseId]/page';
// import { useRouter } from 'next/navigation';







// function CourseCard({course,refreshData,displayUser=false}) {

//     const router = useRouter();
//     const handleOnDelete=async()=>{
//         const resp = await db.delete(CourseList).where(eq(CourseList.id,course?.id)).returning({id:CourseList?.id})

//         if(resp){
//             refreshData()
//         }
//     }
//     return (
//     <div className='shadow-md rounded-lg border p-2
//      cursor-pointer mt-4'>
//         <Link href={'/course/' + course?.courseId}>   
//             <Image src={course?.courseBanner} width={200} height={150}
//             className='w-full h-[150px] object-cover rounded-lg ' alt='no'/>
            
//         </Link>
//         <div className='p-2'>
//             <h2 className='font-medium text-sm flex justify-between items-center'>{course?.courseOutput?.course_name}
                
//                 {!displayUser && <DropDownOption handleDelete={()=>handleOnDelete()}>
//             <HiMiniEllipsisVertical/></DropDownOption>}</h2>


//             <p className='text-sm text-gray-400 my-1'>{course?.category}</p>
//             <div className='flex items-center justify-between'>
//                 <h2 className='flex gap-1 items-center p-1 px-1
//                 bg-purple-200 text-gray-700 text-sm rounded-md'>
//                     <HiOutlineBookOpen/>{course?.courseOutput?.number_of_chapters} Chapters</h2>
//                 <h2 className=' gap-1 p-1 px-1
//                 bg-purple-200 text-gray-700 text-sm rounded-md'>{course?.level}</h2>
//                 <h2 className=' flex items-center gap-1 p-1 px-1
//                 bg-purple-200 text-gray-700 text-sm rounded-md'><CiCalendarDate/>{course?.createdAt}</h2>
//             </div>
//             {displayUser &&<div className='flex gap-2 items-center mt-2'>
//                 <Image src={course?.userProfileImage} width={35} height={35} className='rounded-full'/>
//                 <h2 className='text-sm'>{course?.userName}</h2>
//             </div>}
//         </div>
//     </div>
//   )
// }

// export default CourseCard


// "use client";
// import Image from "next/image";
// import React from "react";
// import { HiOutlineBookOpen, HiMiniEllipsisVertical } from "react-icons/hi2";
// import { CiCalendarDate } from "react-icons/ci";
// import DropDownOption from "./DropDownOption";
// import { db } from "@/configs/db";
// import { CourseList } from "@/configs/schema";
// import { eq } from "drizzle-orm";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// function CourseCard({ course, refreshData, displayUser = false }) {
//   const router = useRouter();

//   const handleOnDelete = async () => {
//     const resp = await db
//       .delete(CourseList)
//       .where(eq(CourseList.id, course?.id))
//       .returning({ id: CourseList?.id });

//     if (resp) {
//       refreshData();
//     }
//   };

//   return (
//     <div
//       className="bg-white/70 border border-purple-100 hover:border-purple-300 
//       backdrop-blur-xl rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300
//       cursor-pointer overflow-hidden"
//     >
//       <Link href={`/course/${course?.courseId}`}>
//         <div className="overflow-hidden rounded-t-2xl">
//           <Image
//             src={course?.courseBanner}
//             width={400}
//             height={200}
//             className="w-full h-[160px] object-cover rounded-t-2xl transform hover:scale-105 transition duration-300"
//             alt="Course Banner"
//           />
//         </div>
//       </Link>

//       <div className="p-4">
//         <div className="flex justify-between items-center">
//           <h2 className="font-semibold text-base text-gray-800">
//             {course?.courseOutput?.course_name}
//           </h2>
//           {!displayUser && (
//             <DropDownOption handleDelete={handleOnDelete}>
//               <HiMiniEllipsisVertical className="text-gray-500 hover:text-purple-500 transition" />
//             </DropDownOption>
//           )}
//         </div>

//         <p className="text-sm text-gray-400 mt-1">{course?.category}</p>

//         <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
//           <span className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-md">
//             <HiOutlineBookOpen className="text-sm" />
//             {course?.courseOutput?.number_of_chapters} Chapters
//           </span>
//           <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-md">
//             {course?.level}
//           </span>
//           <span className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-md">
//             <CiCalendarDate className="text-sm" />
//             {course?.createdAt}
//           </span>
//         </div>

//         {displayUser && (
//           <div className="flex items-center gap-2 mt-4">
//             <Image
//               src={course?.userProfileImage}
//               width={32}
//               height={32}
//               className="rounded-full"
//               alt="User"
//             />
//             <h2 className="text-sm text-gray-700">{course?.userName}</h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CourseCard;


"use client";
import Image from "next/image";
import React from "react";
import { HiOutlineBookOpen, HiMiniEllipsisVertical } from "react-icons/hi2";
import { CiCalendarDate } from "react-icons/ci";
import DropDownOption from "./DropDownOption";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CourseCard({ course, refreshData, displayUser = false }) {
  const router = useRouter();

  const handleOnDelete = async () => {
    const resp = await db
      .delete(CourseList)
      .where(eq(CourseList.id, course?.id))
      .returning({ id: CourseList?.id });

    if (resp) {
      refreshData();
    }
  };

  return (
    <div
      className="bg-white/70 border border-purple-100 backdrop-blur-xl rounded-2xl 
      shadow-md hover:shadow-2xl transform transition-transform duration-200 
      hover:scale-[1.03] hover:z-10 relative"
    >
      <Link href={`/course/${course?.courseId}`}>
        <div className="overflow-hidden rounded-t-2xl">
          <Image
            src={course?.courseBanner}
            width={400}
            height={200}
            className="w-full h-[160px] object-cover rounded-t-2xl transform hover:scale-105 transition duration-300"
            alt="Course Banner"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-base text-gray-800">
            {course?.courseOutput?.course_name}
          </h2>
          {!displayUser && (
            <DropDownOption handleDelete={handleOnDelete}>
              <HiMiniEllipsisVertical className="text-gray-500 hover:text-purple-500 transition" />
            </DropDownOption>
          )}
        </div>

        <p className="text-sm text-gray-400 mt-1">{course?.category}</p>

        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-md">
            <HiOutlineBookOpen className="text-sm" />
            {course?.courseOutput?.number_of_chapters} Chapters
          </span>
          <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-md">
            {course?.level}
          </span>
          <span className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-md">
            <CiCalendarDate className="text-sm" />
            {course?.createdAt}
          </span>
        </div>

        {displayUser && (
          <div className="flex items-center gap-2 mt-4">
            <Image
              src={course?.userProfileImage}
              width={32}
              height={32}
              className="rounded-full"
              alt="User"
            />
            <h2 className="text-sm text-gray-700">{course?.userName}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
