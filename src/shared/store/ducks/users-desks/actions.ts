import { usersDesksSlice } from './slice';
import { fetchMoreUsersDesksThunk, fetchUsersDesksThunk } from './thunks';

export const actions = {
  ...usersDesksSlice.actions,
  fetchUsersDesks: fetchUsersDesksThunk,
  fetchMoreUsersDesks: fetchMoreUsersDesksThunk,
};
