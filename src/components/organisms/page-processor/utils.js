import React, { memo } from 'react';
import { object } from 'prop-types';
import {
  FIRST_GAME, SECOND_GAME, THIRD_GAME,
} from '../../../common/constants';
import OneImageScreen from '../screens/one-image';
import TwoImageScreen from '../screens/two-images';
import ThreeImageScreen from '../screens/three-images';

const screens = {
  [FIRST_GAME]: TwoImageScreen,
  [SECOND_GAME]: OneImageScreen,
  [THIRD_GAME]: ThreeImageScreen,
};

const getComp = props => {
  const { data, data: { type } } = props;
  const Comp = screens[type];
  return Comp ? <Comp level={data} /> : <div>Level not found: {type}</div>;
};

export default memo(getComp);

getComp.propTypes = {
  data: object.isRequired,
};
