import { selfDesksSlice } from './slice';
import { fetchCreateSelfDeskThunk, fetchSelfDesksThunk } from './thunks';

export const actions = {
  ...selfDesksSlice.actions,
  fetchSelfDesks: fetchSelfDesksThunk,
  fetchCreateDesk: fetchCreateSelfDeskThunk,
};
