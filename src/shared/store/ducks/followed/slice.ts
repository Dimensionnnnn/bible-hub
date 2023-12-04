import { createSlice } from '@reduxjs/toolkit';

import { Prayers } from '@shared/api/generated';

import { actions as prayerActions } from '../prayer';
import { actions } from './actions';

export type FollowedStateType = {
  loading: boolean;
  entities: Prayers[];
};

const initialState: FollowedStateType = {
  loading: false,
  entities: [],
};

export const followedSlice = createSlice({
  name: 'followed',
  initialState,
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
      .addCase(prayerActions.fetchPrayerDo.fulfilled, (state, action: any) => {
        state.loading = false;
        const { prayerId } = action.meta.arg;
        const existingPrayers = state.entities || [];
        state.entities = [
          ...existingPrayers.map((prayer) => {
            if (prayer.id === prayerId) {
              return action.payload;
            }
            return prayer;
          }),
        ];
      })
      .addCase(actions.fetchFollowedPrayers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = followedSlice;
