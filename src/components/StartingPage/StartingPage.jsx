import React from 'react';

import Style from './StartingPage.module.scss';
import CategoryCard from '../CategoryCard/CategoryCard';

function StartingPage() {
  return (
    <div className={Style.startingPage}>
      <h2>Let&apos;s play!</h2>
      <h3>Please choose your category</h3>
      <CategoryCard />
    </div>
  );
}

export default StartingPage;
