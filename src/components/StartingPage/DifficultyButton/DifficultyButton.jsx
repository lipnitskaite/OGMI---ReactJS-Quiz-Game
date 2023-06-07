import React from 'react';
import PropTypes from 'prop-types';

import Style from './DifficultyButton.module.scss';

function DifficultyButton({ difficultyLevel }) {
  return (
    <li className={Style.button}>
      <h4 className={Style.title}>{difficultyLevel}</h4>
    </li>
  );
}

DifficultyButton.propTypes = {
  difficultyLevel: PropTypes.string.isRequired,
};

export default DifficultyButton;
