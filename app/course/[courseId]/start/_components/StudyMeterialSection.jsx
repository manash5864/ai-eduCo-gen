
"use client";

import React, { useEffect, useState } from 'react';
import MaterialCardItem from './MaterialCardItem';
import Link from 'next/link';

function StudyMeterialSection({ courseId, course }) {
  const [existingContent, setExistingContent] = useState([]);

  const materialList = [
    {
      name: 'Flashcard',
      desc: 'Flashcard help to remember the key points of the course',
      icon: '/flashcard.jpeg',
      path: '/flashcards',
      type: 'flashcards'
    },
    {
      name: 'Quiz',
      desc: 'Great way to test your knowledge',
      icon: '/quiz.png',
      type: 'quiz',
      path: '/quiz'
    },
    {
      name: 'Question/Answer',
      desc: 'Helps you practice your learning',
      icon: '/q&a.png',
      type: 'qa',
      path: '/q&a'
    }
  ];

  useEffect(() => {
    fetchExistingContent();
  }, []);

  const fetchExistingContent = async () => {
    const res = await fetch('/api/study-type', {
      method: 'POST',
      body: JSON.stringify({
        courseId: courseId,
        studyType: 'ALL'
      })
    });
    const data = await res.json();
    console.log('Fetched study materials:', data);
    setExistingContent(data);
  };

  return (
    <div className="fixed right-0 top-0 hidden md:flex flex-col w-72 h-screen border-l shadow-md bg-sky-50 z-10">
      <h2 className="font-medium text-lg bg-gray-300 text-blue-700 p-4">Study Materials</h2>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {materialList.map((item, index) => (
          <Link key={index} href={`/course/${courseId}${item.path}`}>
            <MaterialCardItem
              item={item}
              existingContent={existingContent}
              course={course}
              refreshData={fetchExistingContent}
              courseId={courseId}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StudyMeterialSection;
