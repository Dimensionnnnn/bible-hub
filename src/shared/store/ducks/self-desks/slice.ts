import { createSlice } from '@reduxjs/toolkit';

import { Desks } from '@shared/api/generated';

import { actions } from './actions';

export const selfDesksSlice = createSlice({
  name: 'self-desks',
  initialState: {
    entities: [] as Desks[] | undefined,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchSelfDesks.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchSelfDesks.fulfilled, (state, action: any) => {
        state.loading = false;
        state.entities = action.payload.data;
      })
      .addCase(actions.fetchSelfDesks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = selfDesksSlice;
