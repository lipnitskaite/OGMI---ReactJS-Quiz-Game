import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Style from './App.module.scss';
import Main from './components/Main/Main';
import QuestionSection from './components/QuestionSection/QuestionSection';
import Result from './components/Result/Result';

function App() {
  const selectedCategory = useSelector((state) => state.quiz.selectedCategory);
  const selectedDifficultyLevel = useSelector(
    (state) => state.quiz.selectedDifficultyLevel
  );

  return (
    <div className={Style.app}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path={`${selectedCategory.name}_${selectedDifficultyLevel.level}`}
          element={<QuestionSection />}
        />
        <Route
          path={`${selectedCategory.name}_${selectedDifficultyLevel.level}/result`}
          element={<Result />}
        />
      </Routes>
    </div>
  );
}

export default App;
