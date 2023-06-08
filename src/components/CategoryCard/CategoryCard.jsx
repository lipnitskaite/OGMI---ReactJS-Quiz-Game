import React from 'react';
import PropTypes from 'prop-types';

import Style from './CategoryCard.module.scss';

function CategoryCard({ chooseCategory, categoryName, categoryImage }) {
  return (
    <li className={Style.cardContainer}>
      <div
        className={Style.card}
        onClick={chooseCategory}
        onKeyDown={chooseCategory}
        role="button"
        tabIndex="0"
        aria-label="Choose the quiz category"
      >
        <h4 className={Style.title}>{categoryName}</h4>
        <img className={Style.image} src={categoryImage} alt={categoryName} />
      </div>
    </li>
  );
}

CategoryCard.propTypes = {
  chooseCategory: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryImage: PropTypes.string.isRequired,
};

export default CategoryCard;
