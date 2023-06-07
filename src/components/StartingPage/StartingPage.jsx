import React from 'react';

import Style from './StartingPage.module.scss';
import categories from '../../utils/data';
import CategoryCard from '../CategoryCard/CategoryCard';

function StartingPage() {
  return (
    <section className={Style.startingPage}>
      <h2 className={Style.title}>Let&apos;s play!</h2>
      <p className={Style.subtitle}>Please choose your category</p>
      <ul className={Style.categories}>
        {categories.map((category) => (
          <CategoryCard
            categoryName={category.title}
            categoryImage={category.image}
          />
        ))}
      </ul>
    </section>
  );
}

export default StartingPage;
