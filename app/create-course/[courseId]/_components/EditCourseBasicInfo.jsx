import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';


function EditCourseBasicInfo({course, refershData}) {

    const [course_name, setName] = useState();
    const [description, setDescription] = useState();

    useEffect(()=>{
        setName(course?.courseOutput?.course_name || '');
        setDescription(course?.courseOutput?.description || '');
    },[course])

    const onUpdateHandler = async() => {
        course.courseOutput.course_name=course_name;
        course.courseOutput.description=description;
        const result = await db.update(CourseList).set({courseOutput:course?.courseOutput
        })
        .where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id});

        refershData(true);
    }

  return (
        <Dialog>
            <DialogTrigger><HiPencilSquare/></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Edit Course Title & Description</DialogTitle>
                    <DialogDescription>
                        <div className='mt-3'>
                            <label>Course Title</label>
                            <Input defaultValue= {course?.courseOutput?.course_name} onChange={(event)=>setName(event?.target.value)}/>
                        </div>
                        <div className='mt-3'>
                            <label>Description</label>
                            <Textarea className="h-40" defaultValue= {course?.courseOutput?.description} onChange={(event)=>setDescription(event?.target.value)}/>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button onClick={onUpdateHandler} className="bg-gray-700">Update</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

  )
}

export default EditCourseBasicInfo