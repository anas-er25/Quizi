import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import quizData from "../../data/quiz.json";
import QuizCard from "./QuizCard.js";
import QuizResult from "./QuizResult.js";
import useBgRandom from "../../hooks/useBgRandom.js";
import DetailedQuizView from "./DetailedQuizView.js";
import QuizCarousel from "./QuizCarousel.js";

export default function Quiz() {
  const [showResult, setShowResult] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsToShow, setQuestionsToShow] = useState(10);
  const handleBgChange = useBgRandom();
  const quizLength = quizData.length;

  const handleAnswer = isCorrect => {
    if (isCorrect) setScore(score + 1);

    const newQuestionId = questionId + 1;
    setQuestionId(newQuestionId);

    if (newQuestionId >= questionsToShow) {
      setShowResult(true);
    }

    handleBgChange();
  }

  const handleReset = () => {
    setShowResult(false);
    setQuestionId(0);
    setScore(0);
  };

  return (
    <Container aria-label="Quiz" className="text-center">
      <Row className="justify-content-md-center">
        {showResult 
          ? (<>
          <QuizResult
              score={score}
              quizLength={quizLength}
              handleReset={handleReset} />
              <QuizCarousel quizData={quizData} />
              </>
              )
          : (<QuizCard
              quizData={quizData}
              questionId={questionId}
              quizLength={questionsToShow}
              handleAnswer={handleAnswer} />
              )
        }
      </Row>
    </Container>
  );
}
