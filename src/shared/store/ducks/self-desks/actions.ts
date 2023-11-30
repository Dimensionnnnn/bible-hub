import { selfDesksSlice } from './slice';
import { fetchSelfDesksThunk } from './thunks';

export const actions = {
  ...selfDesksSlice.actions,
  fetchSelfDesks: fetchSelfDesksThunk,
};
