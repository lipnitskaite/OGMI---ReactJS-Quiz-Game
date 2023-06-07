import React from 'react';

import Style from './App.module.scss';
import StartingPage from './components/StartingPage/StartingPage';

function App() {
  return (
    <div className={Style.app}>
      <StartingPage />
    </div>
  );
}

export default App;
