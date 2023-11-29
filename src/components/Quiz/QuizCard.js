import React from "react";
import Col from "react-bootstrap/Col";

export default function QuizCard({ quizData, questionId, handleAnswer, quizLength }) {
  // Mélanger l'ordre des questions à chaque rendu du composant
  const shuffledQuizData = quizData.sort(() => Math.random() - 0.5);

  return (
    <Col md={6} className="quiz-card">
      <h2 className="text-center">
        <span>({questionId + 1}/{quizLength})</span> 
        {shuffledQuizData[questionId].question}
      </h2>

      <ul>
        {shuffledQuizData[questionId].options.map((element, id) => (
          <li 
            key={"option-" + id}
            onClick={() => handleAnswer(element.isCorrect)}
          >
            {element.answer}
          </li>
        ))}
      </ul>
    </Col>
  );
}
