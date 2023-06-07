import React from 'react';

import Style from './StartingPage.module.scss';
import CategoryCard from '../CategoryCard/CategoryCard';

function StartingPage() {
  return (
    <div className={Style.startingPage}>
      <h2 className={Style.title}>Let&apos;s play!</h2>
      <p className={Style.subtitle}>Please choose your category</p>
      <CategoryCard />
    </div>
  );
}

export default StartingPage;
