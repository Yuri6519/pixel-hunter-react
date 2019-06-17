import React from 'react';
import Intro from '../components/pages/intro';
import Greeting from '../components/pages/greeting';
import Rules from '../components/pages/rules';
import Game from '../components/pages/game';
import {
  INTRO,
  GREETING,
  RULES,
  GAME,
  // STAT,
} from '../common/constants';


const mapLevel = {
  [INTRO]: <Intro />,
  [GREETING]: <Greeting />,
  [RULES]: <Rules />,
  [GAME]: <Game />,
};

export default ({ level }) => mapLevel[level] || <div>Object for level={level} not found</div>;
