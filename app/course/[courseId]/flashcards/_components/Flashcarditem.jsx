import React from 'react'
import ReactCardFlip from 'react-card-flip'

function Flashcarditem({isFlipped,handleClick,flashcard}) {
  return (
    <div className="flex items-center justify-center">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="p-2 bg-blue-900 text-white flex items-center 
        justify-center text-3xl rounded-lg cursor-pointer shadow-lg
        h-[250px] 
        w-[200px] 
        md:h-[350px] md:w-[300px]" onClick={handleClick}>
          <h2 className='text-center font-bold text-3xl' >{flashcard?.Front}</h2>
        </div>

        <div className="p-2 bg-sky-200 text-black flex items-center 
        justify-center rounded-lg cursor-pointer shadow-lg
        h-[250px] 
        w-[200px] 
        md:h-[350px] md:w-[300px]" onClick={handleClick}>
          <h2 className=' flex items-center 
        justify text-2xl px-3'>{flashcard?.Back}</h2>
        </div>
      </ReactCardFlip>
      </div>
  )
}

export default Flashcarditem



