import React from 'react';
import { useSelector } from 'react-redux';

import Style from './QuestionPage.module.scss';

function QuestionPage() {
  const selectedDifficultyLevel = useSelector(
    (state) => state.quiz.selectedDifficultyLevel
  );
  const activeQuestionIndex = useSelector((state) => state.quiz.activeQuestion);
  const { questions } = selectedDifficultyLevel.quiz;
  const { question, choices } = questions[activeQuestionIndex];

  return (
    <section className={Style.questionPage}>
      <h3 className={Style.title}>{question}</h3>
      <ul className={Style.choices}>
        {choices.map((item) => (
          <li className={Style.choice}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionPage;
