import React from 'react';
import PropTypes from 'prop-types';

import Style from './CategoryCard.module.scss';

function CategoryCard({
  chooseCategory,
  index,
  selectedCategoryIndex,
  categoryName,
  categoryImage,
}) {
  return (
    <div
      className={`${Style.card} ${
        selectedCategoryIndex === index && Style.card_active
      }`}
      onClick={chooseCategory}
      onKeyDown={chooseCategory}
      role="button"
      tabIndex="0"
      aria-label="Choose the quiz category"
    >
      <h4 className={Style.title}>{categoryName}</h4>
      <img className={Style.image} src={categoryImage} alt={categoryName} />
    </div>
  );
}

CategoryCard.propTypes = {
  chooseCategory: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  selectedCategoryIndex: PropTypes.number,
  categoryName: PropTypes.string.isRequired,
  categoryImage: PropTypes.string.isRequired,
};

CategoryCard.defaultProps = {
  selectedCategoryIndex: null,
};

export default CategoryCard;
