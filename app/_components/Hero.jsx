
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const features = [
  {
    title: 'AI Course Generator',
    description: 'Generate structured courses using Gemini AI instantly.',
  },
  {
    title: 'Flashcard Builder',
    description: 'Create chapter-wise flashcards for easy revision.',
  },
  {
    title: 'Quiz Creator',
    description: 'Auto-generate quizzes based on course content.',
  },
  {
    title: 'Smart Q&A',
    description: 'Ask anything from your course and get smart AI answers.',
  },
  {
    title: 'YouTube Content',
    description: 'Help to Understanding Course with visuals.',
  },
  {
    title: 'Progress Tracker',
    description: 'Track your course progress and revisit chapters.',
  },
];

export default function HomePage() {
  return (
    
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <div>
      <nav className="z-50 relative flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo1.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
            loading="eager"
          />
          <span className="text-xl sm:text-2xl font-bold text-cyan-400">AI EduGen</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-300 text-sm font-medium">
          <a href="/AboutUs" className="hover:text-white transition">About Us</a>
          <a href="/Faq" className="hover:text-white transition">FAQ</a>
          <a href="/ContactUs" className="hover:text-white transition">Contact Us</a>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="px-4 py-2 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Background Animations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[8%] w-[300px] h-[300px] bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 rounded-full blur-3xl opacity-40"
          animate={{ x: [0, 80, -25, 0], y: [0, -25, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute top-[5%] right-[5%] w-[300px] h-[300px] bg-gradient-to-tr from-green-600 via-indigo-500 to-blue-800 rounded-full blur-3xl opacity-40"
          animate={{ x: [10, 50, -25, 0], y: [0, -30, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute top-[40%] right-[5%] w-[350px] h-[350px] bg-gradient-to-br from-pink-500 via-purple-600 to-blue-400 rounded-full blur-2xl opacity-30"
          animate={{ x: [0, -35, 15, 0], y: [0, 35, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute top-[60%] left-[25%] w-[200px] h-[200px] bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-30 blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute top-[75%] right-[15%] w-[280px] h-[280px] bg-gradient-to-tl from-yellow-500 to-red-400 rounded-full opacity-20 blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center pt-32 pb-16 px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
        >
          BUILD YOUR OWN COURSE<br />WITH THE HELP OF AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          Generate complete online courses, flashcards, quizzes, and smart learning content in seconds using AI.
        </motion.p>
        <motion.a
          href="/dashboard"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          Start Generating
        </motion.a>
      </div>

      {/* Feature Section */}
      <div id="explore" className="relative z-10 max-w-6xl mx-auto mt-28 px-6 mb-10">
        <h2 className="text-center text-4xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Explore Platform Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-gradient-to-br from-[#1f1f1f] to-[#292929] p-6 rounded-2xl shadow-xl border border-gray-700 hover:shadow-2xl transition duration-300 ease-in-out backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300">{feature.description}</p>
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-50  max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-sm">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-sky-600 mb-2">AI Edu Gen</h2>
          <p className="text-gray-500 mb-4">
            Empowering learners with AI-powered courses. Learn faster, smarter, and better.
          </p>
          <div className="flex gap-4 text-lg text-gray-500">
            <Link href="https://twitter.com" target="_blank"><FaTwitter className="hover:text-sky-500" /></Link>
            <Link href="https://linkedin.com" target="_blank"><FaLinkedin className="hover:text-sky-500" /></Link>
            <Link href="https://github.com" target="_blank"><FaGithub className="hover:text-sky-500" /></Link>
            <Link href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-sky-500" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className='ml-40'>
          <h3 className="text-lg text-sky-600 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            
            <li><Link href="/about" className="hover:text-sky-600">About Us</Link></li>
            <li><Link href="/pricing" className="hover:text-sky-600">Pricing</Link></li>
            <li><Link href="/faq" className="hover:text-sky-600">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-sky-600">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className='ml-60'>
          <h3 className="text-lg font-semibold mb-3 text-sky-600">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:text-sky-600">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-sky-600">Privacy Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-sky-600">Disclaimer</Link></li>
          </ul>
        </div>
        
      </div>

      {/* Bottom Note */}
      <div className="mt-10 mb-5 text-xs text-center text-gray-400">
        © {new Date().getFullYear()} AI Course Platform. All rights reserved. Crafted with ❤️ in India.
        <p className='font-bold'>Develop By Manash and Rishab</p>
      </div>


      
   </div>
    </section>
    
 

  );
}
