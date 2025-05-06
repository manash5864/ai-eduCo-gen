import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
    <hr className="border-black opacity-30" />
    <footer className="bg-gradient-to-br from-gray-200 via-purple-200 to-sky-200 border-t py-5 ">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-sm">
        
        {/* Logo & Description */}
        <div className="ml-10">
          <h2 className="text-2xl font-bold text-sky-600 mb-2">AI Edu Gen</h2>
          <p className="text-gray-800 mb-4">
            Empowering learners with AI-powered courses. Learn faster, smarter, and better.
          </p>
          <div className="flex gap-4 text-lg text-gray-800">
            <Link href="https://twitter.com" target="_blank"><FaTwitter className="hover:text-sky-500" /></Link>
            <Link href="https://linkedin.com" target="_blank"><FaLinkedin className="hover:text-sky-500" /></Link>
            <Link href="https://github.com" target="_blank"><FaGithub className="hover:text-sky-500" /></Link>
            <Link href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-sky-500" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="ml-20">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/AboutUs" className="hover:text-sky-600">About Us</Link></li>
            <li><Link href="/dashboard/upgrade" className="hover:text-sky-600">Pricing</Link></li>
            <li><Link href="/Faq" className="hover:text-sky-600">FAQs</Link></li>
            <li><Link href="/ContactUs" className="hover:text-sky-600">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="ml-20">
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:text-sky-600">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-sky-600">Privacy Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-sky-600">Disclaimer</Link></li>
          </ul>
        </div>
        
      </div>

      {/* Bottom Note */}
      <div className="mt-10 ml-100 text-xs text-gray-400">
        © {new Date().getFullYear()} AI Course Platform. All rights reserved. Crafted with ❤️ in India.
      </div>
    </footer>
    </div>
  );
}
