import { MAX_LEVELS, STAT_UNKNOWN } from '../../../common/constants';

export const initResp = (arr = []) => {
  const count = MAX_LEVELS - arr.length;

  for (let i = 1; i <= count; i++) {
    arr.push(STAT_UNKNOWN);
  }
};
