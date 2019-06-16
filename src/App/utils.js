import React from 'react';
import Intro from '../components/pages/intro';
import Greeting from '../components/pages/greeting';
import Rules from '../components/pages/rules';
import {
  INTRO,
  GREETING,
  RULES,
  // GAME,
  // STAT,
} from '../common/constants';


const mapLevel = {
  [INTRO]: <Intro />,
  [GREETING]: <Greeting />,
  [RULES]: <Rules />,
};

export default ({ level }) => mapLevel[level] || <div>Object for level={level} not found</div>;
