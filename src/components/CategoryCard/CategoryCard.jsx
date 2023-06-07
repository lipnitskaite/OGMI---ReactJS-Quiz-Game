import React from 'react';

import Style from './CategoryCard.module.scss';

import harryPotterImage from '../../images/shayna-douglas--EwOTtOcReM-unsplash.jpg';

function CategoryCard() {
  return (
    <li className={Style.card}>
      <h4 className={Style.title}>Harry Potter</h4>
      <img
        className={Style.image}
        src={harryPotterImage}
        alt="Harry Potter Book"
      />
    </li>
  );
}

export default CategoryCard;
