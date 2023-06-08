import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setCategory,
  setSelectedDifficultyLevel,
  setActiveQuestion,
  setResult,
} from '../../store/slices/quizSlice';
import Style from './ResultPage.module.scss';
import PageTitle from '../PageTitle/PageTitle';

function ResultPage() {
  const dispatch = useDispatch();
  const selectedDifficultyLevel = useSelector(
    (state) => state.quiz.selectedDifficultyLevel
  );
  const resultScore = useSelector((state) => state.quiz.result);

  const resultData = selectedDifficultyLevel.quiz.result.find(
    (item) => resultScore >= item.minScore && resultScore <= item.maxScore
  );

  const goToStart = () => {
    dispatch(setCategory({}));
    dispatch(setSelectedDifficultyLevel({}));
    dispatch(setActiveQuestion(0));
    dispatch(setResult(0));
  };

  return (
    <section className={Style.resultPage}>
      <PageTitle titleText={resultData.title} />
      <p className={Style.subtitle}>{`Your result is ${resultScore} of 5.`}</p>
      <p className={Style.subtitle}>{resultData.description}</p>
      <Link to="/" className={Style.button} onClick={() => goToStart()}>
        Play again
      </Link>
    </section>
  );
}

export default ResultPage;
