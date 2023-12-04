import { createSlice } from '@reduxjs/toolkit';

import { Desks } from '@shared/api/generated';

import { actions } from './actions';

export type UsersDesksStateType = {
  entities: Desks[];
  loading: boolean;
  afterCursor?: string;
};

const initialState: UsersDesksStateType = {
  entities: [],
  loading: false,
};

export const usersDesksSlice = createSlice({
  name: 'users-desks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchUsersDesks.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchMoreUsersDesks.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchUsersDesks.fulfilled, (state, action: any) => {
        state.loading = false;
        state.entities = action.payload.data;
        state.afterCursor = action.payload.cursor?.afterCursor;
      })
      .addCase(actions.fetchMoreUsersDesks.fulfilled, (state, action: any) => {
        state.loading = false;
        state.entities = state.entities
          ? [...state.entities, ...action.payload.data]
          : action.payload.data;
        state.afterCursor = action.payload.cursor?.afterCursor;
      })
      .addCase(actions.fetchUsersDesks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(actions.fetchMoreUsersDesks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = usersDesksSlice;
