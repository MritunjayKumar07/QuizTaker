// Quizlist.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import quizData from "../DB/quizData.js";
import "./Quizlist.module.css";

const Quizlist = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await quizData();
        //localStorage.setItem(data);
        setData(fetchedData[0]);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };
    fetchData();
  }, []);

  const renderSubtopics = (topicKey) => {
    return (
      <ul>
        {Object.keys(data[topicKey]).map((subtopicKey) => (
          <li key={subtopicKey}>
            <Link
              to={`/detail/${topicKey}/${subtopicKey}`}
              style={{ textDecoration: "none" }}
            >
              <b>{subtopicKey}</b>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Quizzes</h1>
      {data ? (
        <ul>
          {Object.keys(data).map((topicKey) => (
            <li key={topicKey}>
              <details>
                <summary>
                  <h3>{topicKey}</h3>
                </summary>
                {renderSubtopics(topicKey)}
              </details>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Quizlist;
