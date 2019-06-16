import { LEVELS, STAT } from '../../../common/constants';

function* gen() {
  for (let i = 0; i < LEVELS.length; i++) {
    yield LEVELS[i];
  }
  return STAT;
}

let generator;

export const init = () => {
  generator = gen();
};

init();

export const next = () => generator.next();


export const last = () => generator.return(STAT);
