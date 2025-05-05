import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

function TopicDescription() {

  const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);

  const handleInputChange = (filedName, value) => {
    setUserCourseInput(prev=>({
      ...prev,
      [filedName]:value}))
  }
  return (
    <div className='mx-20 lg:mx-44'>
        {/* input topic */}
        <div className='mt-5'>
            <label>💡 Enter the topic for which you want to generate a course using AI. (eg. C/C++, UPSC exam etc.)</label>
            <Input placeholder={'Enter your topic'} className="mt-2" 
            defaultValue={userCourseInput.topic}
            onChange={(e)=>handleInputChange('topic',e.target.value)} 
            />
        </div>
        <div className='mt-5'>
            <label>📖 Tell us more about your course and what you want to include in it.(Optional)</label>
            <Textarea placeholder="About your course" className="mt-2" 
             defaultValue={userCourseInput.description}
            onChange={(e)=>handleInputChange('description',e.target.value)}
            />
        </div>
        {/* text area desc */}
    </div>
  )
}

export default TopicDescription