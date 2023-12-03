import { createSlice } from '@reduxjs/toolkit';

import { Prayers } from '@shared/api/generated';

import { actions } from './actions';

export const followedSlice = createSlice({
  name: 'followed',
  initialState: {
    loading: false,
    entities: [] as Prayers[] | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchFollowedPrayers.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchFollowedPrayers.fulfilled, (state, action: any) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(actions.fetchFollowPrayer.fulfilled, (state, action: any) => {
        state.loading = false;
        const existingPrayers = state.entities || [];
        state.entities = [...existingPrayers, action.payload];
      })
      .addCase(actions.fetchUnfollowPrayer.fulfilled, (state, action: any) => {
        state.loading = false;
        const existingPrayers = state.entities || [];
        state.entities = [...existingPrayers.filter((prayer) => prayer.id !== action.meta.arg)];
      })
      .addCase(actions.fetchFollowedPrayers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = followedSlice;
