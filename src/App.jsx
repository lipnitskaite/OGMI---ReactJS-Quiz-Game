import React from 'react';

import Style from './App.module.scss';
// import StartingPage from './components/StartingPage/StartingPage';
// import QuestionPage from './components/QuestionPage/QuestionPage';
import ResultPage from './components/ResultPage/ResultPage';

function App() {
  return (
    <div className={Style.app}>
      {/* <StartingPage /> */}
      {/* <QuestionPage /> */}
      <ResultPage />
    </div>
  );
}

export default App;
