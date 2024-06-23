import React, { useState } from "react";
import Question from "../question/Question.js";
import "./Quiz.module.css";

const Quiz = ({ topicName, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  const [remainingQuestions, setRemainingQuestions] = useState(
    topicName.questions.length
  );

  const handleAnswerSelected = (isCorrect) => {
    setAttemptedQuestions(attemptedQuestions + 1);
    setRemainingQuestions(remainingQuestions - 1);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < topicName.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      onComplete(score + (isCorrect ? 1 : 0), attemptedQuestions + 1);
    }
  };

  return (
    <div className="quiz-container">
      <p>Questions Remaining: {remainingQuestions}</p>
      <Question
        question={topicName.questions[currentQuestionIndex]}
        onAnswerSelected={handleAnswerSelected}
      />
    </div>
  );
};

export default Quiz;
