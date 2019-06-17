import React, { memo } from 'react';
import { string } from 'prop-types';

const statElement = ({ type }) => <li className={`stats__result stats__result--${type}`} />;

statElement.propTypes = {
  type: string,
};

statElement.defaultProps = {
  type: '',
};


export default memo(statElement);
