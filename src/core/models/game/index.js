import produce from 'immer';

const initialState = {
  playerName: '',
};

export default {
  state: initialState,

  reducers: {
    setName: (state, payload) => produce(state, draft => {
      draft.playerName = payload;
    }),

  },

};
