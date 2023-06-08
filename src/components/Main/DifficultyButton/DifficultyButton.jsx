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
  );
}

DifficultyButton.propTypes = {
  chooseDifficultyLevel: PropTypes.func.isRequired,
  selectedDifficultyIndex: PropTypes.number,
  index: PropTypes.number.isRequired,
  difficultyLevel: PropTypes.string.isRequired,
};

DifficultyButton.defaultProps = {
  selectedDifficultyIndex: null,
};

export default DifficultyButton;
