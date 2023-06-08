import React from 'react';
import PropTypes from 'prop-types';

import Style from './DifficultyButton.module.scss';

function DifficultyButton({ chooseDifficultyLevel, difficultyLevel }) {
  return (
    <li className={Style.buttonContainer}>
      <div
        className={Style.button}
        onClick={chooseDifficultyLevel}
        onKeyDown={chooseDifficultyLevel}
        role="button"
        tabIndex="0"
        aria-label="Choose difficulty level"
      >
        <h4 className={Style.title}>{difficultyLevel}</h4>
      </div>
    </li>
  );
}

DifficultyButton.propTypes = {
  chooseDifficultyLevel: PropTypes.func.isRequired,
  difficultyLevel: PropTypes.string.isRequired,
};

export default DifficultyButton;
