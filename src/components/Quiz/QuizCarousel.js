import React from "react";
import Carousel from "react-bootstrap/Carousel";
import DetailedQuizView from "./DetailedQuizView";

const QuizCarousel = ({ quizData }) => {
  return (
    <Carousel>
      {quizData.map((question, index) => (
        <Carousel.Item key={`carousel-item-${index}`}>
          <DetailedQuizView quizData={[question]} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default QuizCarousel;
