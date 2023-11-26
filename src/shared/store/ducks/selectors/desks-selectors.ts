import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store/store';

const selectUsersAfterCursor = (state: RootState) =>
  state.usersDesks.afterCursor;

export const getUsersAfterCursor = createSelector(
  selectUsersAfterCursor,
  cursor => cursor,
);

const selectUsersDesks = (state: RootState) => state.usersDesks.entities;
const selectSelfDesks = (state: RootState) => state.selfDesks.entities;

export const getUsersDesks = createSelector(selectUsersDesks, desks => desks);
export const getSelfDesks = createSelector(selectSelfDesks, desks => desks);
