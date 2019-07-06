import { STAT } from '../../../common/constants';

const levelStat = {
  type: STAT,
};

let generator;

function* gen(levels) {
  for (let i = 0; i < levels.length; i++) {
    yield levels[i];
  }
  return levelStat;
}

export const init = (levels) => {
  generator = gen(levels);
};

export const next = () => generator.next();

export const last = () => generator.return(levelStat);
