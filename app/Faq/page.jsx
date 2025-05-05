
"use client";
import Link from 'next/link';
import React from 'react';

const steps = [
  {
    id: 1,
    title: "Step 1: Sign Up",
    description: "Create an account to get started with personalized mock interviews.",
    icon: "📝",
  },
  {
    id: 2,
    title: "Step 2: Select Your Plan",
    description: "Choose between free or premium plans based on your needs.",
    icon: "💼",
  },
  {
    id: 3,
    title: "Step 3: Generate Video Courses",
    description: "Generate video courses along with detailed notes",
    icon: "🎬",
  },
  {
    id: 4,
    title: "Step 4: Generate Flashcards",
    description: "Generate flashcards for last minute revision.",
    icon: "🃏",
  },
  {
    id: 5,
    title: "Step 5: Generate Quizzes",
    description: "Generate quizzes to test your knowledge.",
    icon: "💡",
  },
  {
    id: 6,
    title: "Step 6: Generate Questions",
    description: "Generate questions to boost your learning.",
    icon: "🧠",
  },
  {
    id: 7,
    title: "Step 7: Practice Interviews",
    description: "Participate in mock interviews tailored to your career field.",
    icon: "🎤",
  },
  {
    id: 8,
    title: "Step 8: Get Feedback",
    description: "Receive detailed feedback to improve your performance.",
    icon: "📊",
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black py-12 px-4 w-full bg-gradient-to-br from-purple-200 via-blue-100 to-cyan-200">
      <h1 className="text-5xl font-bold mb-10 text-center">How It Works</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative group bg-white/50 text-black rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-light-yellow"
          >
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
            <p className="text-gray-600 group-hover:text-black">{step.description}</p>
            {/* Add a tooltip-like effect */}
            <div className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-90 rounded-lg transition-opacity flex justify-center items-center">
              <span className="text-white text-lg">{step.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="px-8 py-3 border border-purple-700 text-purple-700 rounded-full bg-transparent hover:bg-purple-700 hover:text-white transition"><Link href='/dashboard'>Get Started</Link>
          
        </button>
      </div>
    </div>
  );
};

export default HowItWorksPage;