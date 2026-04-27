import React from "react";
import "./Verbal.css";

const Verbal = () => {
  const questions = [
    {
      question: "Choose correct synonym of 'Happy'",
      options: ["Sad", "Joyful", "Angry", "Tired"],
      answer: "Joyful"
    },
    {
      question: "Fill in the blank: She ___ going to college.",
      options: ["is", "are", "am", "be"],
      answer: "is"
    },
    {
      question: "Choose correct antonym of 'Fast'",
      options: ["Quick", "Rapid", "Slow", "Speedy"],
      answer: "Slow"
    }
  ];

  return (
    <div className="verbal-container">
      <h1>Verbal Ability</h1>

      {questions.map((q, index) => (
        <div className="card" key={index}>
          <h3>{q.question}</h3>

          {q.options.map((opt, i) => (
            <p key={i}>{opt}</p>
          ))}

          <p className="answer">Answer: {q.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Verbal;