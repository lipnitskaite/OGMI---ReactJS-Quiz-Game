import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Style from './App.module.scss';
import StartingPage from './components/StartingPage/StartingPage';
import QuestionPage from './components/QuestionPage/QuestionPage';
import ResultPage from './components/ResultPage/ResultPage';

function App() {
  const selectedCategory = useSelector((state) => state.quiz.selectedCategory);
  const selectedDifficultyLevel = useSelector(
    (state) => state.quiz.selectedDifficultyLevel
  );

  return (
    <div className={Style.app}>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route
          path={`${selectedCategory.name}/${selectedDifficultyLevel.level}`}
          element={<QuestionPage />}
        />
        <Route
          path={`${selectedCategory.name}/result`}
          element={<ResultPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
