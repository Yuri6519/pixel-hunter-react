import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import immerPlugin from '@rematch/immer';
import * as models from './models';

const store = init({
  models,
  plugins: [selectPlugin(), immerPlugin()],
});


export const { dispatch, select } = store;
export default store;
