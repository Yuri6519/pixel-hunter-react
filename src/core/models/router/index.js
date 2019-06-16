import produce from 'immer';
import { INTRO } from '../../../common/constants';
import { init, next, last } from './utils';

const initialState = {
  current: {
    value: INTRO,
    done: false,
  },
};

export default {
  state: initialState,

  reducers: {
    next: (state) => produce(state, draft => {
      const { done } = state;

      if (!done) {
        draft.current = next();
      }
    }),

    back: (state) => produce(state, draft => {
      init();
      const { done } = state;

      if (!done) {
        draft.current = next();
      }
    }),

    last: (state) => produce(state, draft => {
      draft.current = last();
    }),

  },

};
