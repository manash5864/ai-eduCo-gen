// import { UserButton } from '@clerk/nextjs'
// import Image from 'next/image'
// import React from 'react'

// function Header() {
//   return (
//     <div className='flex justify-between items-center p-3 shadow-lg'>
//         <Image src='/logo1.jpg' alt='logo' width={50} height={50} className='rounded-full'/>
//         <UserButton/>
//     </div>
//   )
// }

// export default Header


// import { UserButton } from '@clerk/nextjs';
// import Image from 'next/image';
// import React from 'react';

// function Header() {
//   return (
//     <div className="flex justify-between items-center p-4 
//      backdrop-blur-md shadow-md 
//       border-b border-purple-100  top-0 z-50
//       transition-all duration-300  from-gray-800 to-sky-200">
      
//       <div className="flex items-center gap-3 group">
//         <Image
//           src="/logo1.jpg"
//           alt="logo"
//           width={50}
//           height={50}
//           className="rounded-full border border-purple-200 
//             shadow-md transform transition-transform duration-300 group-hover:scale-110"
//         />
//         <h1 className="text-lg font-semibold text-purple-700 hidden sm:block transition duration-300 group-hover:text-purple-900">
//           AI EDU GEN
//         </h1>
//       </div>

//       <div className="transition duration-300 hover:scale-105">
//         <UserButton  />
//       </div>
//     </div>
//   );
// }

// export default Header;




import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className="flex justify-between items-center p-4 
      bg-gradient-to-r from-white via-blue-200 to-purple-200 
      backdrop-blur-md shadow-md border-b border-purple-200 
       transition-all duration-300">
      
      <div className="flex items-center gap-4 group">
        <Image
          src="/logo1.jpg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full border border-purple-300 
            shadow-lg transform transition-transform duration-300 group-hover:scale-110"
        />
        <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide hidden sm:block 
          transition duration-300 group-hover:text-purple-900 drop-shadow-sm">
          AI EDU GEN
        </h1>
      </div>

      <div className="transition duration-300 hover:scale-105">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
