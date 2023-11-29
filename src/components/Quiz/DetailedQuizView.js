import React from "react";
import Col from "react-bootstrap/Col";
import '../../styles/App.css'

const DetailedQuizView = ({ quizData }) => {
  return (
    <Col md={6} className="quiz-card text-center">
      {quizData.map((question, index) => (
        <div key={`question-${index}`} className="detailed-question">
          <h3 className="question-text">{question.question}</h3>
          <ul className="options-list">
            {question.options.map((option, optionIndex) => (
              <li
                key={`option-${optionIndex}`}
                style={{ color: option.isCorrect ? "green" : "red" }}
              >
                {option.answer}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Col>
  );
};

export default DetailedQuizView;
