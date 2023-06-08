import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveQuestion, setResult } from '../../store/slices/quizSlice';
import Style from './QuestionSection.module.scss';

function QuestionSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const selectedDifficultyLevel = useSelector(
    (state) => state.quiz.selectedDifficultyLevel
  );
  const activeQuestionIndex = useSelector((state) => state.quiz.activeQuestion);
  const result = useSelector((state) => state.quiz.result);
  const { questions, scorePerQuestion } = selectedDifficultyLevel.quiz;
  const { question, choices, correctAnswer } = questions[activeQuestionIndex];

  const chooseAnswer = (answer, index, activeQuestion, resultScore) => {
    setSelectedAnswerIndex(index);

    if (answer === correctAnswer) {
      setIsCorrectAnswer(true);
      dispatch(setResult(resultScore + scorePerQuestion));
    } else {
      setIsCorrectAnswer(false);
      dispatch(setResult(resultScore));
    }

    setTimeout(() => {
      if (activeQuestion !== questions.length - 1) {
        dispatch(setActiveQuestion(activeQuestion + 1));
        setSelectedAnswerIndex(null);
      } else {
        navigate('result');
      }
    }, 500);
  };

  return (
    <section className={Style.questionSection}>
      <h3 className={Style.title}>{question}</h3>
      <ul className={Style.answers}>
        {choices.map((answer, index) => (
          <li className={Style.listItem} key={answer}>
            <div
              className={`${Style.answer} ${
                selectedAnswerIndex === index &&
                (isCorrectAnswer ? Style.answer_correct : Style.answer_wrong)
              }`}
              onClick={() =>
                chooseAnswer(answer, index, activeQuestionIndex, result)
              }
              onKeyDown={() =>
                chooseAnswer(answer, index, activeQuestionIndex, result)
              }
              role="button"
              tabIndex="0"
              aria-label="Choose the answer"
            >
              {answer}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionSection;
