import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveQuestion, setResult } from '../../store/slices/quizSlice';
import Style from './QuestionPage.module.scss';

function QuestionPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedDifficultyLevel = useSelector(
    (state) => state.quiz.selectedDifficultyLevel
  );
  const activeQuestionIndex = useSelector((state) => state.quiz.activeQuestion);
  const result = useSelector((state) => state.quiz.result);
  const { questions, scorePerQuestion } = selectedDifficultyLevel.quiz;
  const { question, choices, correctAnswer } = questions[activeQuestionIndex];

  const chooseAnswer = (answer, activeQuestion, resultScore) => {
    if (answer === correctAnswer) {
      dispatch(setResult(resultScore + scorePerQuestion));
    } else {
      dispatch(setResult(resultScore));
    }

    if (activeQuestion !== questions.length - 1) {
      dispatch(setActiveQuestion(activeQuestion + 1));
    } else {
      navigate('result');
    }
  };

  return (
    <section className={Style.questionPage}>
      <h3 className={Style.title}>{question}</h3>
      <ul className={Style.choices}>
        {choices.map((answer) => (
          <li className={Style.choiceContainer}>
            <div
              className={Style.choice}
              onClick={() => chooseAnswer(answer, activeQuestionIndex, result)}
              onKeyDown={() =>
                chooseAnswer(answer, activeQuestionIndex, result)
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

export default QuestionPage;
