"use client";
import { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import React from 'react'
import { HiMiniSquaresPlus, HiLightBulb, HiMiniCubeTransparent } from "react-icons/hi2";
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import { UserInputContext } from '../_context/UserInputContext';
import { GenerateCourseLayout_AI } from '@/configs/AiModel';
import LoadingDialog from './_components/LoadingDialog';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import uuid4 from 'uuid4';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import moment from 'moment';



function CreateCourse() {
  const StepperOptions=[
    {
      id:1,
      name:'Category',
      icon:<HiMiniSquaresPlus />
    },
    {
      id:1,
      name:'Topic & Desc',
      icon:<HiLightBulb />
    },
    {
      id:1,
      name:'Options',
      icon:<HiMiniCubeTransparent />
    }

  ]
 

  const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const {user}=useUser();
  const router = useRouter();

  useEffect(()=>{
    console.log(userCourseInput); 
  },[userCourseInput])

  /**?
   * used to check next button enable or disable
   */
  const checkStatus=()=>{
    if (userCourseInput?.length == 0) {
      return true;
    }
    if(activeIndex == 0 && (userCourseInput?.category?.length == 0||userCourseInput?.category==undefined)) { 
      return true;
    }
    if(activeIndex == 1 && (userCourseInput?.topic?.length == 0||userCourseInput?.topic==undefined)) { 
      return true;
    }else if
    (activeIndex == 2&& (userCourseInput?.level == undefined || userCourseInput?.duration == undefined || userCourseInput?.displayVideo == undefined || userCourseInput?.noOfChapters == undefined)) {
      return true;
    }
    return false;
  }


  const GenerateCourseLayout=async()=>{
    setLoading(true);
    const BASIC_PROMPT = 'Generate A course Tutorial on the Following detail with field as a course name, Description, along with the chapter name, about, duration: '
    const USER_INPUT_PROMPT = 'Chategory : '+userCourseInput?.category+',  Topic: '+userCourseInput?.topic+', Level : '+userCourseInput?.level+', Duration : '+userCourseInput?.duration+', No of chapters: '+userCourseInput?.noOfChapters+' , in JSON format'
    const FINAL_PROMPT = BASIC_PROMPT+USER_INPUT_PROMPT;
    console.log(FINAL_PROMPT);
    const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
    console.log(result.response?.text());
    console.log(JSON.parse(result.response?.text()));
    setLoading(false);
    SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
  }


  const SaveCourseLayoutInDb=async(courseLayout )=>{
    var id = uuid4();
    setLoading(true)
    const result = await db.insert(CourseList).values({
      courseId:id,
      name:userCourseInput?.topic,
      level:userCourseInput?.level,
      category:userCourseInput?.category,
      courseOutput:courseLayout,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      userProfileImage:user?.imageUrl,
      createdAt: moment().format('DD-MM-YYYY'),


    })
    console.log("finish");
    setLoading(false);
    router.replace('/create-course/'+id);
  }


  return (
    <div>
      {/*stepper*/}
      <div className='flex flex-col items-center justify-center mt-5'>
        <h2 className='text-2xl text-primary font-medium'>Create course</h2>
        <div className='flex mt-5'> 
          {StepperOptions.map((item,index)=>(
            <div className='flex items-center ' key={index}>
              <div className='flex flex-col items-center w-[50px] md:w-[100px]'> 
                <div className={`bg-gray-300 rounded-full text-white p-3 ${activeIndex>=index && 'bg-gray-700'}`}>
                  {item.icon}
                </div>
                <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
              </div>
              {index!= StepperOptions?.length-1 && <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-400 ${activeIndex-1 >= index && 'bg-gray-700'}`}></div>}
            </div>
          ))}
        </div>
      </div>


      <div className='px-10 md:mt-20 lg:px-44 mt-10'>
      {/*component*/}
        {activeIndex==0?<SelectCategory/>:activeIndex==1?<TopicDescription/>:<SelectOption/>}



      {/*next previous button*/}
        <div className='flex justify-between mt-10'>
          <Button disabled={activeIndex==0} variant='outline' onClick={()=>setActiveIndex(activeIndex-1)} >Previous</Button>
          {activeIndex<2 && <Button disabled={checkStatus()} onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button>}
          {activeIndex==2 && <Button disabled={checkStatus()} onClick={()=>GenerateCourseLayout()}>Generate Course</Button>}
        </div>
      </div>
      <LoadingDialog loading={loading}/>
    </div>
  )
}

export default CreateCourse