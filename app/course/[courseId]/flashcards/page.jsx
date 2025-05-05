
"use client";

import { db } from '@/configs/db'; // ✅ Import your database connection
import { and, eq } from 'drizzle-orm'; // ✅ Import these for query building
import { StudyTypeContent } from '@/configs/schema';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'; // ✅ Small typo fixed
import Flashcarditem from './_components/Flashcarditem';



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



function Flashcard() {
  const { courseId } = useParams(); // ✅ Get courseId from URL params
  const [flashcardFromDB, setFlashcardFromDB] = useState(null);
  const [isFlipped, setIsFlipped] = useState(); // ✅ State to manage card flip
  const [api, setApi] = useState(); // ✅ State to manage carousel API
  const [stepCount, setStepCount] = useState(1); // ✅ State to manage set count
  useEffect(() => {
    if (courseId) {
      getFlashcardFromDB();
    }
  }, [courseId]); // ✅ Run when courseId available

  useEffect(()=>{
    if(!api){
      return;
    }
    api.on('select',()=>{
      setIsFlipped(false); // ✅ Reset flip state when carousel item changes
    })
  },[api])

  const getFlashcardFromDB = async () => {
    try {
      const result = await db
        .select()
        .from(StudyTypeContent)
        .where(
          and(
            eq(StudyTypeContent.courseId, courseId),
            eq(StudyTypeContent.type, "Flashcard") // ✅ Match type carefully
          )
        );

      console.log('flashcard result:', result);
      setFlashcardFromDB(result[0]);
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  };
  const handleClick = () => {
    setIsFlipped(!isFlipped); // ✅ Toggle the flip state
  }

  return (
    <div className=' flex flex-col min-h-screen w-full bg-gradient-to-br from-purple-200 via-blue-100 to-cyan-200'>
    <div className='my-10 px-7 md:px-20 lg:px-44 '>
      <h1 className="text-center text-3xl font-bold ">FLASHCARDS</h1>

      <p className='text-center text-xl mt-5'>Flashcards : The Ultimate Tool to lock in concept!</p>
      <div className='mt-10'>
      <div className='flex items-center gap-3 mb-7 border rounded-xl bg-gray-100 shadow-lg p-5'>
        {flashcardFromDB?.content && flashcardFromDB.content?.map((flashcard, index) => (
          <div key={index} className={`w-full h-2 rounded-full
          ${index<stepCount?'bg-sky-500':'bg-gray-300'}`}>

          </div>
        ))}
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {flashcardFromDB?.content&&flashcardFromDB.content?.map((flashcard, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              <Flashcarditem handleClick={handleClick} isFlipped={isFlipped} flashcard={flashcard} refreshData={()=> getFlashcardFromDB()}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={() => { setStepCount(stepCount - 1); api?.scrollPrev(); }}/>
        <CarouselNext onClick={()=>{setStepCount(stepCount+1); api?.scrollNext()}}/>
      </Carousel>
      </div>

    </div>
    </div>
  );
}

export default Flashcard;


