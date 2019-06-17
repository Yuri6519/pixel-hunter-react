import produce from 'immer';
import { MAX_LIFES_COUNT, RESP_OK, RESP_FAIL } from '../../../common/constants';
import { getRespForStat } from './urils';

const initialState = {
  userName: '',
  userResponse: [],
};

export default {
  state: initialState,

  reducers: {
    setName: (state, payload) => produce(state, draft => {
      draft.userName = payload;
    }),

  },

  // eslint-disable-next-line no-unused-vars
  selectors: (slice, createSelector) => ({
    lifeCount: () => slice(state => {
      const lives = MAX_LIFES_COUNT - state.userResponse.filter(itr => {
        const { res = RESP_OK } = itr;
        return res === RESP_FAIL;
      }).length;
      return lives < 0 ? 0 : lives;
    }),

    statData: () => slice(state => getRespForStat(state.userResponse)),

  }),

};
