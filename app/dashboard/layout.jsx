// "use client"
// import React, { useState } from 'react'
// import SideBar from './_components/SideBar'
// import Header from './_components/Header'
// import { UserCourseListContext } from '../_context/UserCourseListContext'
// import Footer from '@/components/footer'

// function DashboardLayout({children}) {

//   const [userCourseList, setUserCourseList] = useState([]);
//   return (
//   <UserCourseListContext.Provider value ={{userCourseList, setUserCourseList}}>
//   <div>
//     <div className='md:w-64 hidden md:block'><SideBar/></div>
//     <div className='md:ml-64'><Header/>
//       <div className='p-5'>
//         {children}
//       </div>
//     </div>
//   </div>
//   <Footer/>
//   </UserCourseListContext.Provider>
//   )
// }

// export default DashboardLayout
"use client";
import React, { useState } from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";
import { UserCourseListContext } from "../_context/UserCourseListContext";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

function DashboardLayout({ children }) {
  const [userCourseList, setUserCourseList] = useState([]);

  return (
    <UserCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>
      <div className=" flex bg-gradient-to-br from-purple-200 via-blue-100 to-cyan-200 text-gray-800 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:block md:w-64 fixed z-20">
          <SideBar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 md:ml-64 w-full flex flex-col justify-between">
          {/* Sticky Header */}
          <div className=" backdrop-blur-md bg-white/30 shadow-md border-b border-gray-200 transition-all">
            <Header />
          </div>

          {/* Animated Page Content */}
          <motion.div
            className="p-6 md:p-10 flex-grow  backdrop-blur-xl rounded-3xl mt-4 mx-2 md:mx-6 shadow-xl border  from-white via-blue-100 to-purple-100 text-gray-800 border-gray-200 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
      
    </UserCourseListContext.Provider>
  );
}

export default DashboardLayout;
