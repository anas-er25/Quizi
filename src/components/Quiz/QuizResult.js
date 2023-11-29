import React from "react";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const QuizResult = ({ score, handleReset }) => {
  const [questionsToShow, setQuestionsToShow] = useState(10);

  return (
    <>
    <Col md={6} className="quiz-card text-center">
      <button onClick={handleReset}>
        <span className="score">{score}</span> / {questionsToShow} &nbsp;
        Réinitialiser
      </button>
    </Col>
    <hr className="text-white"/>
    </>
  );
};

export default QuizResult;
