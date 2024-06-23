import React, { useState, useEffect } from "react";
import Quiz from "../quiz/Quiz.js";
import quizData from "../DB/quizData.js";
import "./Index.module.css";
import { useParams } from "react-router-dom";

const Index = () => {
  const { topicKey, subtopicKey } = useParams();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await quizData();
        setData(fetchedData[0]);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchData();
  }, []);

  const handleQuizCompletion = (finalScore, totalAttemptedQuestions) => {
    setScore(finalScore);
    setAttemptedQuestions(totalAttemptedQuestions);
    setQuizCompleted(true);
  };

  const handleTopicSelection = (topic) => {
    // console.log(topic.metadata.topic);
    setSelectedTopic(topic);
    // setSelectedTopic(topic);
  };

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div className="Quiz">
      <h1>
        {topicKey}/{subtopicKey}
      </h1>
      <hr />
      {!selectedTopic ? (
        Object.keys(data[topicKey][subtopicKey]).map((topicItemKey) => (
          <details key={topicItemKey}>
            <summary>
              <h2>
                {data[topicKey][subtopicKey][topicItemKey].metadata.topic}
              </h2>
            </summary>
            <div>
              <h4>
                {data[topicKey][subtopicKey][topicItemKey].metadata.launchedBy}
              </h4>
              <h4>
                {data[topicKey][subtopicKey][topicItemKey].metadata.launchDate}
              </h4>
              <h4>
                Total Questions:{" "}
                {
                  data[topicKey][subtopicKey][topicItemKey].metadata
                    .totalQuestions
                }
              </h4>
              <h5
                onClick={() =>
                  handleTopicSelection(
                    data[topicKey][subtopicKey][topicItemKey]
                  )
                }
              >
                Start Quiz
              </h5>
            </div>
          </details>
        ))
      ) : (
        <main>
          {!quizCompleted ? (
            <Quiz topicName={selectedTopic} onComplete={handleQuizCompletion} />
          ) : (
            <div className="result-container">
              <h2>Quiz Completed!</h2>
              <p>Your Score: {score}</p>
              <p>Total Questions Attempted: {attemptedQuestions}</p>
              <button onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default Index;
