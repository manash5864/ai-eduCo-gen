import React from 'react'

function QandAItem({qandA}) {
  return (
    <div>
        <div className="mt-10 p-5">
            <h2 className="font-medium text-3xl text-center mb-5">{qandA?.Chapter}</h2>
            
      {qandA?.["Q&A"] ? (
        <div className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-blue-800 ">Q: {qandA["Q&A"].question}</h3>
          <p className="text-gray-800">A: {qandA["Q&A"].answer}</p>
        </div>
      ) : (
        <p className="text-center text-gray-500">No Q&A available for this chapter.</p>
      )}
    </div>
    </div>
  )
}

export default QandAItem