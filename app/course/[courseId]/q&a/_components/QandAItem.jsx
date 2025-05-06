// import React from 'react'

// function QandAItem({qandA}) {
//   return (
//     <div>
      
//         <div className="mt-10 p-5">
//             <h2 className="font-medium text-3xl text-center mb-5">{qandA?.Chapter}</h2>
            
//       {qandA?.["Q&A"] ? (
//         <div className="bg-gray-100 p-5 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-2 text-blue-800 ">Q: {qandA?.question}</h3>
//           <p className="text-gray-800">A: {qandA?.answer}</p>
//         </div>
        
//       ) : (
//         <p className="text-center text-gray-500">No Q&A available for this chapter.</p>
//       )}
//     </div>
//     </div>
//   )
// }

// export default QandAItem

import React from 'react';

function QandAItem({ qandA }) {
  if (!qandA || typeof qandA !== 'object') {
    return <p className="text-center text-gray-500 mt-10">Invalid Q&A data format.</p>;
  }

  // Get the chapter name and content
  const chapterName = Object.keys(qandA)[0];
  const qaContent = qandA[chapterName];

  const question = qaContent?.question;
  const answer = qaContent?.answer;

  return (
    <div className="mt-10 p-5">
      <h2 className="font-medium text-3xl text-center mb-5">{chapterName}</h2>

      {question && answer ? (
        <div className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-blue-800">Q: {question}</h3>
          <p className="text-gray-800">A: {answer}</p>
        </div>
      ) : (
        <p className="text-center text-gray-500">No question/answer available for this chapter.</p>
      )}
    </div>
  );
}

export default QandAItem;
