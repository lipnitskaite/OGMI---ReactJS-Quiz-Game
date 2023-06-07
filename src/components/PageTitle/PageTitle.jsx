import React from 'react';
import PropTypes from 'prop-types';

import Style from './PageTitle.module.scss';

function PageTitle({ titleText }) {
  return <h2 className={Style.title}>{titleText}</h2>;
}

PageTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
};

export default PageTitle;
