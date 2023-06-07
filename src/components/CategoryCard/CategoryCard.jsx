import React from 'react';
import PropTypes from 'prop-types';

import Style from './CategoryCard.module.scss';

function CategoryCard({ categoryName, categoryImage }) {
  return (
    <li className={Style.card}>
      <h4 className={Style.title}>{categoryName}</h4>
      <img className={Style.image} src={categoryImage} alt={categoryName} />
    </li>
  );
}

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryImage: PropTypes.string.isRequired,
};

export default CategoryCard;
