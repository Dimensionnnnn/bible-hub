import { deskColumnsSlice } from './slice';
import { fetchDeskColumnsThunk } from './thunk';

export const actions = {
  ...deskColumnsSlice.actions,
  fetchDeskColumns: fetchDeskColumnsThunk,
};
