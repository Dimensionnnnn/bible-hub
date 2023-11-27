import { SerializedError, createSlice } from '@reduxjs/toolkit';

import { Desks } from '@shared/api/generated';

import { actions } from './actions';

export const usersDesksSlice = createSlice({
  name: 'users-desks',
  initialState: {
    entities: [] as Desks[] | undefined,
    loading: false,
    error: null as unknown as SerializedError,
    afterCursor: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchUsersDesks.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchUsersDesks.fulfilled, (state, action: any) => {
        state.loading = false;
        state.entities = state.entities
          ? [...state.entities, ...action.payload.data]
          : action.payload.data;
        state.afterCursor = action.payload.cursor?.afterCursor;
      })
      .addCase(actions.fetchUsersDesks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { reducer } = usersDesksSlice;
