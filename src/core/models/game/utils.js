import {
  // MAX_LEVELS,
  STAT_UNKNOWN,
  STAT_WRONG,
  STAT_SLOW,
  STAT_FAST,
  STAT_CORRECT,
  TIME_FAST,
  TIME_SLOW,
  RESP_OK,
  RESP_FAIL,
} from '../../../common/constants';

import { init as genInit, next as genNext, last as genLast } from './generator';

export const initialLevel = {
  value: {},
  done: false,
};

export const getRespForStat = (resp = []) => resp.map(itr => {
  let result = STAT_UNKNOWN;
  if (typeof itr === 'object') {
    const { res, time } = itr;

    if (res >= 0 && time >= 0) {
      switch (res) {
        case RESP_FAIL:
          result = STAT_WRONG;
          break;

        case RESP_OK:
          if (time <= TIME_FAST) {
            result = STAT_FAST;
          } else if (time > TIME_SLOW) {
            result = STAT_SLOW;
          } else {
            result = STAT_CORRECT;
          }
          break;

        default:
          break;
      }
    }
  }
  return result;
});

export const init = levels => genInit(levels);

export const next = () => genNext();

export const last = () => genLast();
