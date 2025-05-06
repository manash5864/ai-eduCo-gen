import React, { useContext } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { UserInputContext } from '@/app/_context/UserInputContext';



function SelectOption() {
      const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);
    
      const handleInputChange = (filedName, value) => {
        setUserCourseInput(prev=>({
          ...prev,
          [filedName]:value}))
      }


  return (
    <div className='px-10 md:px-20 lg:px-44'>
        <div className='grid grid-cols-2 gap-10'>
            <div>
                <label className='text-md'>🎓 Difficulty Level</label>
                <Select onValueChange={(value)=>handleInputChange('level',value)} 
                defaultValue={userCourseInput?.level} >
                <SelectTrigger className="w-[370px] mt-2">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advance">Advance</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div>
                <label className='text-md'>🕛 Course Duration</label>
                <Select onValueChange={(value)=>handleInputChange('duration',value)}
                defaultValue={userCourseInput?.duration}    >
                <SelectTrigger className="w-[370px] mt-2">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1 Hours">1 Hours</SelectItem>
                    <SelectItem value="2 Hours">2 Hours</SelectItem>
                    <SelectItem value="More then 3 hours">More then 3 hours</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div>
                <label className='text-md'>▶️ Add Video Course</label>
                <Select onValueChange={(value)=>handleInputChange('displayVideo',value)} defaultValue={userCourseInput?.displayVideo}>
                <SelectTrigger className="w-[370px] mt-2">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                </SelectContent>
                </Select>
            </div>
             <div>
                <label className='text-md'>📖 No of Chapters prefer 5-10</label>
                <Input type="number" className="w-[370px] mt-2"
                onChange={(event)=>handleInputChange('noOfChapters',event.target.value)} defaultValue={userCourseInput?.noOfChapters}
                />
            </div>

        </div>
    </div>
  )
}

export default SelectOption