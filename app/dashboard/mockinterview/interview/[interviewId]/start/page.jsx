"use client"
import { db } from '@/configs/db';
import { MockInterview } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview() {
  const params = useParams();

  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(()=>{
    GetInterviewDetails();
  },[]);

  const GetInterviewDetails = async () => {
          const result = await db.select().from(MockInterview)
              .where(eq(MockInterview.mockId, params.interviewId));

              const jsonMockResp = JSON.parse(result[0].jsonMockResp);

              console.log(jsonMockResp);

              setMockInterviewQuestion(jsonMockResp);
              setInterviewData(result[0]);

      };
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Questions */}
        <QuestionsSection
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}/>

        {/* Video/Audio Recording */}
        <RecordAnswerSection
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
        interviewData={interviewData}/>
      </div>
      <div className='flex justify-end gap-6 mt-1'> {/* Reduced margin-top to place buttons closer */}
                {activeQuestionIndex > 0 && 
                    <Button 
                        onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)} 
                        className="bg-blue-800 text-white hover:bg-blue-500 transition-colors duration-300 ease-in-out"
                    >
                        Previous Question
                    </Button>}
                {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && 
                    <Button 
                        onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)} 
                        className="bg-blue-800 text-white hover:bg-blue-500 transition-colors duration-300 ease-in-out"
                    >
                        Next Question
                    </Button>}
                {activeQuestionIndex === mockInterviewQuestion?.length - 1 && 
                    <Link href={'/dashboard/mockinterview/interview/' + interviewData?.mockId + '/feedback'}>
                        <Button 
                            className="bg-blue-800 text-white hover:bg-blue-500 transition-colors duration-300 ease-in-out"
                        >
                            End Interview
                        </Button>
                    </Link>}
            </div>
    </div>
  )
}

export default StartInterview