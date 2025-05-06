"use client";

import { db } from '@/configs/db';
import { and, eq } from 'drizzle-orm';
import { StudyTypeContent } from '@/configs/schema';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import QandAItem from './_components/QandAItem';


function QandA() {
  const { courseId } = useParams();
  const [qAndA, setQandA] = useState(null);
  const [stepCount, setStepCount] = useState(1);
  const [qandAData, setQandAdata] = useState([]);

  useEffect(() => {
    if (courseId) {
      getQandA();
    }
  }, [courseId]);

 const getQandA = async () => {
  try {
    const result = await db
      .select()
      .from(StudyTypeContent)
      .where(
        and(
          eq(StudyTypeContent.courseId, courseId),
          eq(StudyTypeContent.type, "Question/Answer")
        )
      );

    const content = result[0]?.content;
    const parsedContent = typeof content === "string" ? JSON.parse(content) : content;

    setQandA(result[0]);
    setQandAdata(Array.isArray(parsedContent) ? parsedContent : []);
  } catch (error) {
    console.error('Error fetching Q&A:', error);
  }
};



  return (
    <div className='flex flex-col min-h-screen w-full bg-gradient-to-br from-purple-200 via-blue-100 to-cyan-200'>

    <div className='my-10 px-7 md:px-20 lg:px-44'>
      <h2 className="text-center text-3xl font-bold">QUESTION AND ANSWER</h2>
      <p className='text-center text-xl mt-5'>
        Question And Answer: The Ultimate Tool to View concepts!
      </p>

      <div>
        {/* Progress Bar */}
        <div className='flex items-center gap-3 mt-4 mb-7 border rounded-xl bg-gray-100 shadow-lg p-5'>
          {stepCount !== 1 && (
            <Button variant='outline' size='sm' onClick={() => setStepCount(stepCount - 1)}>
              Previous
            </Button>
          )}
          {qAndA?.content && qAndA?.content?.map((qandA, index) => (
            
            <div
              key={index}
              className={`w-full h-2 rounded-full ${index < stepCount ? 'bg-sky-500' : 'bg-gray-300'}`}
            ></div>
          ))}
          {stepCount < (qandAData.length) && (
          <Button variant='outline' size='sm' onClick={() => setStepCount(stepCount + 1)}>
            Next
          </Button>
          )}
        </div>

        {/* Quiz Card */}
        <div>
          <QandAItem
            qandA={qandAData[stepCount - 1]}           
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default QandA;
