"use client";
import React, { useEffect, useState } from "react";


const Quiz = () => {
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Retrieve score from localStorage
    const savedScore = localStorage.getItem("quizScore");
    if (savedScore) {
      setScore(savedScore);
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
      {score !== null ? (
        <div className="text-lg">
          Your quiz score is: <strong>{score} / 100</strong>
        </div>
      ) : (
        <div>No quiz score found.</div>
      )}
    </div>
  );
};

export default Quiz;
