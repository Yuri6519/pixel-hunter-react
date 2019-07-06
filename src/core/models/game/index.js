import produce from 'immer';
import {
  MAX_LIFES_COUNT,
  RESP_OK, RESP_FAIL,
  GAME_CHANGE_LEVEL,
  GAME_CHANGE_RESP,
  GAME_CHANGE_NONE,
  GAME_CHANGE_LAST,
} from '../../../common/constants';
import {
  getRespForStat, initialLevel, init as initDataGenerator, next, last,
} from './utils';
import getData from '../../../common/mock-data';

const initialState = {
  userName: '',
  data: [],
  currentLevel: initialLevel,
  userResponse: [],
  changeMode: GAME_CHANGE_NONE,
};

export default {
  state: initialState,

  reducers: {
    setName: (state, payload) => produce(state, draft => {
      draft.userName = payload;
    }),

    setData: (draft, payload) => {
      draft.data = payload;
    },

    reset: draft => {
      console.log('STORE::game::reducers::reset::');

      draft.userName = '';
      draft.currentLevel = initialLevel;
      draft.userResponse = [];
      draft.changeMode = GAME_CHANGE_NONE;
    },

    next: draft => {
      const { currentLevel: { done } } = draft;

      if (!done) {
        const level = next();
        draft.currentLevel = level;
        draft.changeMode = level.done ? GAME_CHANGE_LAST : GAME_CHANGE_LEVEL;
      }
    },

    last: draft => {
      draft.currentLevel = last();
      draft.changeMode = GAME_CHANGE_LAST;
    },

    addResp: (draft, payload) => {
      draft.userResponse.push(payload);
      draft.changeMode = GAME_CHANGE_RESP;
    },

  },

  effects: () => ({
    async init() {
      const data = await getData();
      this.setData(data);
      initDataGenerator(data);
    },
  }),

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

    level: () => slice(state => state.currentLevel.value),

    mode: () => slice(state => state.changeMode),

  }),

};
