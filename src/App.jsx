import React from 'react';

import Style from './App.module.scss';
// import StartingPage from './components/StartingPage/StartingPage';
import QuestionPage from './components/QuestionPage/QuestionPage';

function App() {
  return (
    <div className={Style.app}>
      {/* <StartingPage /> */}
      <QuestionPage />
    </div>
  );
}

export default App;
