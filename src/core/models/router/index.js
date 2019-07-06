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
    next: draft => {
      const { done } = draft;

      if (!done) {
        draft.current = next();
      }
    },

    back: draft => {
      console.log('STORE::router::reducers::back::');

      init();
      const { done } = draft;

      if (!done) {
        draft.current = next();
      }
    },

    last: draft => {
      draft.current = last();
    },

  },

  effects: dispatch => ({
    async return() {
      console.log('STORE::router::effects::back::');

      await dispatch.game.reset();
      await this.back();
    },
  }),


};
