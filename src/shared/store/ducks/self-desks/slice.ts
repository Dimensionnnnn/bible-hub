import { createSlice } from '@reduxjs/toolkit';

import { Desks } from '@shared/api/generated';

import { actions } from './actions';

export type SelfDesksStateType = {
  entities: Desks;
  loading: boolean;
};

const initialState: SelfDesksStateType = {
  entities: {} as Desks,
  loading: false,
};

export const selfDesksSlice = createSlice({
  name: 'self-desks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchSelfDesks.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchSelfDesks.fulfilled, (state, action: any) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(actions.fetchSelfDesks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = selfDesksSlice;
