import React from 'react';
import { useSelector } from 'react-redux';
import Style from './ResultPage.module.scss';
import PageTitle from '../PageTitle/PageTitle';

function ResultPage() {
  const selectedDifficultyLevel = useSelector(
    (state) => state.quiz.selectedDifficultyLevel
  );
  const resultScore = useSelector((state) => state.quiz.result);

  const resultData = selectedDifficultyLevel.quiz.result.find(
    (item) => resultScore >= item.minScore && resultScore <= item.maxScore
  );

  return (
    <section className={Style.resultPage}>
      <PageTitle titleText={resultData.title} />
      <p className={Style.subtitle}>{`Your result is ${resultScore} of 5.`}</p>
      <p className={Style.subtitle}>{resultData.description}</p>
      <button className={Style.button} type="button">
        Play again
      </button>
    </section>
  );
}

export default ResultPage;
