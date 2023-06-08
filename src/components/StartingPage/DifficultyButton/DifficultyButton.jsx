import React from 'react';
import PropTypes from 'prop-types';

import Style from './DifficultyButton.module.scss';

function DifficultyButton({
  chooseDifficultyLevel,
  selectedDifficultyIndex,
  index,
  difficultyLevel,
}) {
  return (
    <li className={Style.buttonContainer}>
      <div
        className={`${Style.button} ${
          selectedDifficultyIndex === index && Style.button_active
        }`}
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
  selectedDifficultyIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  difficultyLevel: PropTypes.string.isRequired,
};

export default DifficultyButton;
