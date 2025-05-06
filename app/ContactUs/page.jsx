// // app/dashboard/contact/page.jsx

// import Link from 'next/link';
// import React from 'react';

// function ContactUs() {
//     return (
//         <div className=" min-h-screen w-full py-10 flex flex-col items-center from-blue-500 via-purple-300 to-orange-100 bg-gradient-to-br">
//             {/* Title */}
//             <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
//                 {/* Card 1 */}
//                 <div className="border bg-white/60 border-gray-300 rounded-lg p-6 shadow-md w-full max-w-xs hover:scale-105 transition-transform duration-300">
//                     <h2 className="text-2xl font-semibold">Email Support</h2>
//                     <p className="mt-4">Reach us at jbmanash85@gmail.com for assistance.</p>
//                 </div>
//                 {/* Card 2 */}
//                 <div className="border bg-white/60 border-gray-300 rounded-lg p-6 shadow-md w-full max-w-xs hover:scale-105 transition-transform duration-300">
//                     <h2 className="text-2xl font-semibold">Live Chat</h2>
//                     <p className="mt-4">Chat with our support team 24/7 for instant help.</p>
//                 </div>
//                 {/* Card 3 */}
//                 <div className="border bg-white/60 border-gray-300 rounded-lg p-6 shadow-md w-full max-w-xs hover:scale-105 transition-transform duration-300">
//                     <h2 className="text-2xl font-semibold">FAQ</h2>
//                     <p className="mt-4">Check out our FAQ for commonly asked questions.</p>
//                 </div>
//                 {/* Card 4 */}
//                 <div className="border bg-white/60 border-gray-300 rounded-lg p-6 shadow-md w-full max-w-xs hover:scale-105 transition-transform duration-300">
//                     <h2 className="text-2xl font-semibold">Contact Manash</h2>
//                     <p className="mt-4">Connect us on LinkedIn  
//                         linkedin.com/in/manashjyotibora/
//                     </p>
//                 </div>
//                 {/* Card 5 */}
//                 <div className="border bg-white/60 border-gray-300 rounded-lg p-6 shadow-md w-full max-w-xs hover:scale-105 transition-transform duration-300">
//                     <h2 className="text-2xl font-semibold">Contact Rishab</h2>
//                     <p className="mt-4">Connect us on LinkedIn 
//                     <Link href='https://www.linkedin.com/in/r-goswami'}>LinkedIn</Link>  
                        
//                     </p>
//                 </div>
                
//             </div>
//         </div>
//     );
// }

// export default ContactUs;




// app/dashboard/contact/page.jsx

import Link from 'next/link';
import React from 'react';

function ContactUs() {
    return (
        <div className="min-h-screen w-full py-10 px-4 bg-gradient-to-br from-blue-400 via-purple-200 to-orange-100 flex flex-col items-center">
            {/* Title */}
            <h1 className="text-5xl font-extrabold text-gray-800 mb-12 drop-shadow-lg">Contact Us</h1>

            {/* Contact Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                {[
                    {
                        title: 'Email Support',
                        desc: 'Reach us at jbmanash85@gmail.com for assistance.',
                    },
                    {
                        title: 'Live Chat',
                        desc: 'Chat with our support team 24/7 for instant help.',
                    },
                    {
                        title: 'FAQ',
                        desc: 'Check out our FAQ for commonly asked questions.',
                    },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white/70 backdrop-blur-md border border-gray-300 rounded-2xl p-8 shadow-xl w-full max-w-xs hover:scale-105 transition-transform duration-300"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h2>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Team Contact Section */}
            <div className="w-full max-w-5xl">
                <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Connect with Our Team</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    {/* Manash Card */}
                    <div className="bg-gradient-to-br from-purple-300 via-blue-100 to-white border border-gray-300 rounded-xl p-6 w-full max-w-sm shadow-lg hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-gray-800">Manash Jyoti Bora</h3>
                        <p className="mt-3 text-gray-700">Connect with me on LinkedIn:</p>
                        <Link
                            href="https://www.linkedin.com/in/manashjyotibora/"
                            className="text-blue-600 hover:underline mt-1 inline-block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/manashjyotibora
                        </Link>
                    </div>

                    {/* Rishab Card */}
                    <div className="bg-gradient-to-br from-orange-200 via-pink-100 to-white border border-gray-300 rounded-xl p-6 w-full max-w-sm shadow-lg hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-gray-800">Rishab Goswami</h3>
                        <p className="mt-3 text-gray-700">Connect with me on LinkedIn:</p>
                        <Link
                            href="https://www.linkedin.com/in/r-goswami"
                            className="text-blue-600 hover:underline mt-1 inline-block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/r-goswami
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
