'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FilePlus } from 'lucide-react';

const tips = [
  "Prepare STAR format answers for behavioral questions.",
  "Research the company thoroughly before the interview.",
  "Practice common technical questions for your role.",
  "Keep your resume concise and tailored to the job.",
  "Always ask insightful questions at the end of the interview.",
];

export default function RotateInter() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 4000); // change tip every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold text-purple-700 mb-4">AI Mock Interview</h1>
      <p className="text-gray-500 mb-6">Create & Start your Interview Session –</p>

      {/* Grid for Add + Tip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add New Interview Card */}
        <Card className="cursor-pointer hover:shadow-md transition">
          <CardContent className="p-6 flex flex-col items-start space-y-4">
            <FilePlus className="w-8 h-8 text-purple-600" />
            <div>
              <h2 className="text-lg font-semibold">Add New Interview</h2>
              <p className="text-sm text-gray-500">Start a new interview process.</p>
            </div>
          </CardContent>
        </Card>

        {/* Interview Tip Card */}
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-6 flex flex-col justify-center h-full">
            <h2 className="text-md font-semibold text-purple-700 mb-2">💡 Interview Tip</h2>
            <p className="text-gray-700 text-sm">{tips[currentTipIndex]}</p>
          </CardContent>
        </Card>
      </div>

      {/* Rest of your mock interview UI below */}
    </div>
  );
}
