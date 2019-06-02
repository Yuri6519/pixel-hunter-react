const delay = time => new Promise(resolve => setTimeout(() => resolve(), time));

const initialState = { value: 0 };

const timer = {
  state: initialState,

  reducers: {
    tick({ value }, payload) {
      const newVal = value + payload;
      return { value: newVal };
    },
    reset() {
      return { value: 0 };
    },
  },

  effects: () => ({
    async tickAsync(payload) {
      await delay(1000);
      this.tick(payload);
    },
  }),

  selectors: (slice, createSelector) => ({
    valueMulty: () => createSelector(
      slice(state => state.value),
      (_, payload) => payload,
      (value, payload) => value * payload,
    ),


  }),

};

export default timer;
