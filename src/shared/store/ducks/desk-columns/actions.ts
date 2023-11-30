import { deskColumnsSlice } from './slice';
import { fetchCreateColumnThunk, fetchDeskColumnsThunk, fetchMoreDeskColumnsThunk } from './thunk';

export const actions = {
  ...deskColumnsSlice.actions,
  fetchDeskColumns: fetchDeskColumnsThunk,
  fetchMoreDeskColumns: fetchMoreDeskColumnsThunk,
  fetchCreateColumn: fetchCreateColumnThunk,
};
