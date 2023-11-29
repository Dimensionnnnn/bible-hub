import { createSlice } from '@reduxjs/toolkit';

import { Prayers } from '@shared/api/generated';

import { actions } from './actions';

export const prayersByColumnIdSlice = createSlice({
  name: 'prayers-by-column-id',
  initialState: {
    loading: false,
    entities: [] as Record<number, Prayers[] | undefined>,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchPrayersByColumnId.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchPrayersByColumnId.fulfilled, (state, action: any) => {
        state.loading = false;
        const columnId = action.meta.arg;
        const existingColumns = state.entities[columnId] || [];
        state.entities[columnId] = [...existingColumns, ...action.payload];
      })
      .addCase(actions.fetchPrayersByColumnId.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = prayersByColumnIdSlice;