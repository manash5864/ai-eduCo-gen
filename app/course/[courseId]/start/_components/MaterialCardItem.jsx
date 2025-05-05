
"use client";

import { RefreshCcw } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

function MaterialCardItem({ item, existingContent, course, refreshData, courseId }) {
  const [loading, setLoading] = useState(false);
  const [contentExists, setContentExists] = useState(false);

  useEffect(() => {
    // Check if current item's content already exists
    const isContentAvailable = existingContent?.some(
      (content) => content.type.toLowerCase() === item.name.toLowerCase()
    );
    setContentExists(isContentAvailable);
  }, [existingContent, item.name]);

  const generateContent = async () => {
    setLoading(true);

    let chapters = '';
    course?.courseOutput.chapters.forEach((chapter) => {
      chapters = (chapter.chapter_name || chapter.course_name) + ',' + chapters;
    });

    const result = await fetch('/api/study-type-content', {
      method: 'POST',
      body: JSON.stringify({
        courseId: course?.courseId,
        type: item.name,
        chapters: chapters,
      }),
    });

    await result.json();
    await refreshData();  // Refresh latest content
    setLoading(false);
    setContentExists(true); // Update button
  };

  return (
    <div className="border shadow rounded-md p-2 flex justify-center flex-col items-center bg-sky-200 mb-1.5">
      <div>
        <div>
          <Image src={item.icon} alt={item.name} width={70} height={70} className="mx-auto" />
          <div>
            <h2 className="text-md font-semibold text-center">{item.name}</h2>
            <p className="text-sm text-gray-700 text-center">{item.desc}</p>
          </div>
        </div>
        {contentExists ? (
          <Button
            className="mt-3 w-full cursor-pointer"
            variant="outline" courseId={courseId}
          >
            View
          </Button>
        ) : (
          <Button
            className="mt-3 w-full cursor-pointer"
            variant="outline"
            onClick={generateContent}
            disabled={loading}
          >
            {loading ? ( 
              <>
                <RefreshCcw className="animate-spin" size={16} /> Generating...
              </>
            ) : (
              "Generate"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

export default MaterialCardItem;
