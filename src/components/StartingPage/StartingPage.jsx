import React from 'react';

import Style from './StartingPage.module.scss';
import quizData from '../../utils/data';
import CategoryCard from '../CategoryCard/CategoryCard';
import DifficultyButton from './DifficultyButton/DifficultyButton';

function StartingPage() {
  return (
    <section className={Style.startingPage}>
      <h2 className={Style.title}>Let&apos;s play!</h2>
      <div>
        <p className={Style.subtitle}>Choose your category</p>
        <ul className={Style.categories}>
          {quizData.categories.map((category) => (
            <CategoryCard
              categoryName={category.title}
              categoryImage={category.image}
            />
          ))}
        </ul>
      </div>
      <div>
        <p className={Style.subtitle}>Choose the difficulty level</p>
        <ul className={Style.difficulty}>
          <DifficultyButton difficultyLevel="Easy" />
          <DifficultyButton difficultyLevel="Medium" />
          <DifficultyButton difficultyLevel="Hard" />
        </ul>
      </div>
      <button className={Style.button} type="button">
        Start
      </button>
    </section>
  );
}

export default StartingPage;
