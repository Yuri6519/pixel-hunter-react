import { LEVELS, STAT } from '../../../common/constants';

const levels = LEVELS;

function* gen() {
  for (let i = 0; i < levels.length; i++) {
    yield levels[i];
  }
  return STAT;
}

let generator;

export const init = () => {
  generator = gen();
};

export const next = () => generator.next();

export const last = () => generator.return(STAT);

// инициализируем
init();
