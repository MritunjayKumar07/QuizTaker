import React from "react";
import styles from "./Question.module.css";

const Question = ({ question, onAnswerSelected }) => {
  return (
    <div className={styles["question-container"]}>
      <h2>{question.question}</h2>
      {question.code && (
        <pre className={styles["code-snippet"]}>{question.code}</pre>
      )}
      <hr />
      <div className={styles["options"]}>
        {question.options.map((option, index) => (
          <section
            key={index}
            onClick={() => {
              onAnswerSelected(option.isCorrect);
            }}
            className={styles["option-button"]}
          >
            <pre>{option.text}</pre>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Question;
