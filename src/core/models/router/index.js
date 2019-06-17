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
    next: (draft) => {
      const { done } = draft;

      if (!done) {
        draft.current = next();
      }
    },

    back: (draft) => {
      init();
      const { done } = draft;

      if (!done) {
        draft.current = next();
      }
    },

    last: (draft) => {
      draft.current = last();
    },

  },

};
