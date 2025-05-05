"use client";

import { db } from '@/configs/db';
import { and, eq } from 'drizzle-orm';
import { StudyTypeContent } from '@/configs/schema';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import QuizCardItem from './_components/QuizCardItem';

function Quiz() {
  const { courseId } = useParams();
  const [quizes, setQuizes] = useState(null);
  const [stepCount, setStepCount] = useState(1);
  const [quizData, setQuizData] = useState([]);
  const [isCorrectAns, setIsCorrectAns] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [userAnswered, setUserAnswered] = useState(false); // ✅ track if answered

  useEffect(() => {
    if (courseId) {
      getQuizes();
    }
  }, [courseId]);

  const getQuizes = async () => {
    try {
      const result = await db
        .select()
        .from(StudyTypeContent)
        .where(
          and(
            eq(StudyTypeContent.courseId, courseId),
            eq(StudyTypeContent.type, "Quiz")
          )
        );

      setQuizes(result[0]);
      setQuizData(result[0]?.content || []);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };

  const checkAnswer = (userAnswer, currentQuestion) => {
    if (userAnswer === currentQuestion?.answer) {
      setIsCorrectAns(true);
    } else {
      setIsCorrectAns(false);
    }
    setCorrectAnswer(currentQuestion?.answer);
    setUserAnswered(true);
  };

  useEffect(() => {
    // when step changes (next or previous), reset everything
    setCorrectAnswer(null);
    setIsCorrectAns(null);
    setUserAnswered(false);
  }, [stepCount]);

  return (
    <div className='flex flex-col min-h-screen w-full bg-gradient-to-br from-purple-200 via-blue-100 to-cyan-200'>

    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className="text-center text-3xl font-bold">QUIZ</h2>
      <p className='text-center text-xl mt-5'>
        Quizzes: The Ultimate Tool to Practice concepts!
      </p>

      <div>
        {/* Progress Bar */}
        <div className='flex items-center gap-3 mt-4 mb-7 border rounded-xl bg-gray-100 shadow-lg p-5'>
          {stepCount !== 1 && (
            <Button variant='outline' size='sm' onClick={() => setStepCount(stepCount - 1)}>
              Previous
            </Button>
          )}
          {quizes?.content && quizes.content.map((quiz, index) => (
            <div
              key={index}
              className={`w-full h-2 rounded-full ${index < stepCount ? 'bg-sky-500' : 'bg-gray-300'}`}
            ></div>
          ))}
          {stepCount < (quizData.length) && (
          <Button variant='outline' size='sm' onClick={() => setStepCount(stepCount + 1)}>
            Next
          </Button>
          )}
        </div>

        {/* Quiz Card */}
        <div>
          <QuizCardItem
            quiz={quizData[stepCount - 1]}
            userSelectedOption={(v) => checkAnswer(v, quizData[stepCount - 1])}
            correctAnswer={correctAnswer}
            userAnswered={userAnswered}
          />
        </div>
      </div>

      {/* Show Feedback */}
      {isCorrectAns === false && (
        <div className='border p-3 border-red-700 bg-red-300 rounded-lg mt-5'>
          <h2 className='font-bold text-red-600'>Incorrect</h2>
          <p>Correct Answer is: {correctAnswer}</p>
        </div>
      )}
      {isCorrectAns === true && (
        <div className='border p-3 border-green-700 bg-green-300 rounded-lg mt-5'>
          <h2 className='font-bold text-green-600'>Correct</h2>
          <p>Your answer is Correct!</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Quiz;