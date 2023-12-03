import { deskColumnsSlice } from './slice';
import {
  fetchCreateColumnThunk,
  fetchDeleteColumnThunk,
  fetchDeskColumnsThunk,
  fetchMoreDeskColumnsThunk,
} from './thunk';

export const actions = {
  ...deskColumnsSlice.actions,
  fetchDeskColumns: fetchDeskColumnsThunk,
  fetchMoreDeskColumns: fetchMoreDeskColumnsThunk,
  fetchCreateColumn: fetchCreateColumnThunk,
  fetchDeleteColumn: fetchDeleteColumnThunk,
};
