import { deskColumnsSlice } from './slice';
import { fetchDeskColumnsThunk, fetchMoreDeskColumnsThunk } from './thunk';

export const actions = {
  ...deskColumnsSlice.actions,
  fetchDeskColumns: fetchDeskColumnsThunk,
  fetchMoreDeskColumns: fetchMoreDeskColumnsThunk,
};
