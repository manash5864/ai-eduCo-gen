import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddCourse from './_components/AddCourse'
import UserCourseList from './_components/UserCourseList'



function Dashboard() {
  return (
    <div><AddCourse/>
    {/* // display the course */}
    <UserCourseList/>
  </div>
  )
}

export default Dashboard