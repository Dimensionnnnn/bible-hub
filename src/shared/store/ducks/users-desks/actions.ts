import { usersDesksSlice } from './slice';
import { fetchUsersDesksThunk } from './thunks';

export const actions = {
  ...usersDesksSlice.actions,
  fetchUsersDesks: fetchUsersDesksThunk,
};
