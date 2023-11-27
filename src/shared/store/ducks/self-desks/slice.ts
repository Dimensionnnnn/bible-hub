import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { Desks } from '@shared/api/generated';

import { actions } from './actions';

export const selfDesksSlice = createSlice({
  name: 'self-desks',
  initialState: {
    entities: [] as Desks[] | undefined,
    loading: false,
    error: null as unknown as SerializedError,
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
      .addCase(actions.fetchSelfDesks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const reducer = selfDesksSlice.reducer;
