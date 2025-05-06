// "use client";
// import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
// import { Progress } from '@/components/ui/progress';
// import Image from 'next/image'
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useContext } from 'react'

// import { HiOutlineHome } from "react-icons/hi";
// import { HiOutlineMap } from "react-icons/hi";
// import { HiOutlineCube } from "react-icons/hi";
// import { HiOutlineLogout } from "react-icons/hi";
// import { HiOutlineLightBulb } from "react-icons/hi";

// function SideBar() {
//     const {userCourseList, setUserCourseList} = useContext(UserCourseListContext);

//     const Menu = [
//         {
//             id:1,
//             name:'Home',
//             icon:<HiOutlineHome />,
//             path:'/dashboard'
//         },
//         {
//             id:2,
//             name:'Explore',
//             icon:<HiOutlineMap />,
//             path:'/dashboard/explore'
//         },
//         {
//             id:3,
//             name:'Mock Interview',
//             icon:<HiOutlineLightBulb />,
//             path:'/dashboard/mockinterview'
//         },
//         {
//             id:4,
//             name:'Upgrade',
//             icon:<HiOutlineCube />,
//             path:'/dashboard/upgrade'
//         },
//         {
//             id:5,
//             name:'Log Out',
//             icon:<HiOutlineLogout />,
//             path:'/dashboard/logout'
//         }
//     ]
//     const path=usePathname();
//   return (
//     <div className='fixed h-full md:w-64 p-3 shadow-lg'>
//         <Image src={'/logo1.jpg'} width={50} height={50} alt='no' className='rounded-full'/>
//         <hr className='my-3'/>

//         <ul>
//             {Menu.map((item,index)=>(
//                 <Link href={item.path} key={index}>
//                 <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path == path&& 'bg-gray-100 text-black'}`}>
//                     <div className='text-2xl'>{item.icon}</div>
//                     <h2>{item.name}</h2>
//                 </div>
//                 </Link> 
//             ))}
//         </ul>
//         <div className='border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[80%]'>
//             <Progress value={(userCourseList?.length/5)*100} />
//             <h2 className='text-sm my-2 text-center'> {userCourseList?.length} out of 5 Course generated</h2>
//             <h2 className='text-sx text-blue-500 text-center'> <Link href='/dashboard/upgrade'>Upgrade your plan for unlimited Course Generation</Link></h2>
            
//         </div>
        
//     </div>
//   )
// }

// export default SideBar



"use client";
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';

import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineMap } from "react-icons/hi";
import { HiOutlineCube } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";

function SideBar() {
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);

  const Menu = [
    {
      id: 1,
      name: 'Home',
      icon: <HiOutlineHome />,
      path: '/dashboard',
    },
    {
      id: 2,
      name: 'Explore',
      icon: <HiOutlineMap />,
      path: '/dashboard/explore',
    },
    {
      id: 3,
      name: 'Mock Interview',
      icon: <HiOutlineLightBulb />,
      path: '/dashboard/mockinterview',
    },
    {
      id: 4,
      name: 'Upgrade',
      icon: <HiOutlineCube />,
      path: '/dashboard/upgrade',
    },
    {
      id: 5,
      name: 'Log Out',
      icon: <HiOutlineLogout />,
      path: '/dashboard/logout',
    },
  ];
  const path = usePathname();

  return (
    <div className="fixed h-full w-64 p-6 bg-gradient-to-b from-blue-500 via-purple-200 to-orange-100 text-gray-700 shadow-lg border border-gray-300 overflow-hidden">
      <div className="flex items-center justify-center mb-6">
        <Image src={'/logo1.jpg'} width={50} height={50} alt="no" className="rounded-full border-4 border-white shadow-lg" />
      </div>
      <hr className="border-white opacity-30 my-3" />

      <ul className="space-y-4">
        {Menu.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex mt-2 items-center gap-4 p-3 cursor-pointer rounded-lg hover:bg-white/90 hover:bg-opacity-20 transition duration-300 ease-in-out transform hover:scale-105 ${
                item.path == path && 'bg-white/90 bg-opacity-30'
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2 className="font-semibold">{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-sky-100 bg-opacity-10 p-4 rounded-lg w-[80%] shadow-xl">
        <Progress value={(userCourseList?.length / 5) * 100} />
        <h2 className="text-sm my-2 text-center text-gray-700">{userCourseList?.length} out of 5 Courses generated</h2>
        <h2 className="text-xs text-blue-500 text-center">
          <Link href="/dashboard/upgrade">Upgrade your plan for unlimited Course Generation</Link>
        </h2>
      </div>
    </div>
  );
}

export default SideBar;
