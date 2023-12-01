import { createSlice } from '@reduxjs/toolkit';

import { Prayers } from '@shared/api/generated';

import { actions } from './actions';

export const prayerByIdSlice = createSlice({
  name: 'prayer-by-id',
  initialState: {
    loading: false,
    entity: {} as Prayers,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchPrayerById.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchPrayerById.fulfilled, (state, action: any) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(actions.fetchPrayerDo.fulfilled, (state, action: any) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(actions.fetchPrayerById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = prayerByIdSlice;
