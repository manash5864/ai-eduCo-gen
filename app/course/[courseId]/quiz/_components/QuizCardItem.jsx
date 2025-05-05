import React, { useState } from 'react'

function QuizCardItem({ quiz, userSelectedOption, correctAnswer, userAnswered }) {
  const [selectedOption, setSelectedOption] = useState();

  const handleClick = (option) => {
    if (userAnswered) return; // ✅ Prevent changing after answered
    setSelectedOption(option);
    userSelectedOption(option);
  };

  return quiz && (
    <div className="mt-10 p-5">
      <h2 className="font-medium text-3xl text-center">{quiz?.question}</h2>
      
      <div className="grid grid-cols-2 gap-5 mt-5">
        {quiz?.options.map((option, index) => (
          <h2
            key={index}
            onClick={() => handleClick(option)}
            className={`w-full border rounded-full p-3 hover:bg-blue-400 cursor-pointer text-center text-lg
              ${
                userAnswered
                  ? option === correctAnswer
                    ? 'bg-green-500 text-white' // Correct => green
                    : 'bg-red-400 text-white'   // Wrong => red
                  : 'bg-gray-400' // Before answer, default
              }
            `}
          >
            {option}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default QuizCardItem;
