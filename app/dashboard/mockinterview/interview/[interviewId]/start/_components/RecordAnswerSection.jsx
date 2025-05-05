import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { HiOutlineMicrophone } from "react-icons/hi";
import { RiStopCircleLine } from "react-icons/ri";
import { toast } from 'sonner';
import { EvaluateAnswerAI } from '@/configs/AiModel';
import { db } from '@/configs/db';
import { UserAnswer } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function RecordAnswerSection({mockInterviewQuestion, activeQuestionIndex, interviewData}) {

  const [userAnswer, setUserAnswer]=useState('');
  const {user}=useUser();
  const [loading, setLoading]=useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(()=>{
    results.map((result)=>(
      setUserAnswer(prevAns=>prevAns+result?.transcript)
    ))
  },[results])

  useEffect(()=>{
    if(!isRecording&&userAnswer.length>10){
      UpdateUserAnswer();
    }
    
  },[userAnswer])

  const StartStopRecording=async()=>{
    if(isRecording){

      stopSpeechToText()

    }
    else{
      startSpeechToText();
    }
  }

  const UpdateUserAnswer=async()=>{

    console.log(userAnswer)

    setLoading(true);
    const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+", User Answer:"+userAnswer+", Please evaluate the answer based on relevance, clarity, and completeness "+"Provide a rating from 1 to 5, and include feedback for improvement in JSON format with 'rating' and 'feedback' fields.";

      const result = await EvaluateAnswerAI.sendMessage(feedbackPrompt);

      const mockJsonResp=(result.response.text()).replace('```json', '').replace('```', '');
      console.log(mockJsonResp);
      const JsonFeedbackResp=JSON.parse(mockJsonResp);

      const resp=await db.insert(UserAnswer)
      .values({
        mockIdRef:interviewData?.mockId,
        question:mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns:userAnswer,
        feedback:JsonFeedbackResp?.feedback,
        rating:JsonFeedbackResp?.rating,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD-MM-YYYY')
      })

      if(resp){
        toast('Answer saved successfully');
        setUserAnswer('');
        setResults([]);
      }
      setResults([]);
      setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">

      <div className="relative flex flex-col justify-center items-center mb-10 bg-slate-200 rounded-lg p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <Image
              src={"/webcam.png"}
              alt="Webcam display placeholder"
              width={200}
              height={200}
              className="absolute rounded-lg"
          />
          <Webcam
              mirrored={true}
              style={{
                  height: 300,
                  width: "100%",
                  zIndex: 10,
                  borderRadius: "0.5rem", // Rounded corners for Webcam
              }}
          />
      </div>
      <Button 
      disabled={loading}
      variant="outline" className="my-10"
      onClick={StartStopRecording}
      >
        {isRecording ? (
                    <h2 className="text-red-600 animate-pulse flex gap-2 items-center">
                        <RiStopCircleLine /> Stop Recording
                    </h2>
                ) : (
                    <h2 className="text-blue-800 flex gap-2 items-center">
                        <HiOutlineMicrophone />
                        Record Answer
                    </h2>
                )}
          </Button>

    </div>
  )
}

export default RecordAnswerSection