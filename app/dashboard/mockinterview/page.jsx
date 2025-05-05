// import React from 'react'
// import AddNewInterview from '../_components/AddNewInterview'
// import InterviewList from '../_components/InterviewList'

// function mockinterview() {
//   return (
//     <div className='p-10'>
//       <h2 className='font-bold text-3xl text-purple-800 mb-4'>AI Mock Interview</h2>
//       <h2 className='text-gray-500 mb-5'>Create & Start your Interview Session - </h2>

//       <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-5'>
//                 <AddNewInterview />
//       </div>

//       {/* Previous Mock Interviews List */}
//       <InterviewList/>

//     </div>
//   )
// }

// export default mockinterview


'use client';
import React, { useEffect, useState } from 'react';
import AddNewInterview from '../_components/AddNewInterview';
import InterviewList from '../_components/InterviewList';
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from 'framer-motion';

const tips = [
  "Prepare STAR format answers for behavioral questions.",
  "Research the company thoroughly before the interview.",
  "Practice common technical questions for your role.",
  "Keep your resume concise and tailored to the job.",
  "Always ask insightful questions at the end of the interview.",
];

function MockInterview() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTip(false); // start fade-out
      setTimeout(() => {
        setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
        setShowTip(true); // start fade-in
      }, 300); // wait for fade-out before changing tip
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-10'>
      <h2 className='font-bold text-3xl text-purple-800 mb-4'>AI Mock Interview</h2>
      <h2 className='text-gray-500 mb-5'>Create & Start your Interview Session - </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-5'>
        <AddNewInterview />

        {/* Animated Tips */}
        <Card className="bg-purple-50 border-purple-200 h-full transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer">
  <CardContent className="p-6 flex flex-col justify-center h-full">
    <h2 className="text-md font-semibold text-purple-700 mb-2">💡 Interview Tip</h2>

    <div className="min-h-[32px] relative">
      <AnimatePresence mode="wait">
        {showTip && (
          <motion.p
            key={currentTipIndex}
            className="text-gray-700 text-sm absolute"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {tips[currentTipIndex]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  </CardContent>
</Card>
      </div>

      <InterviewList />
    </div>
  );
}

export default MockInterview;