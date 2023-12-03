import { createSlice } from '@reduxjs/toolkit';

import { Columns } from '@shared/api/generated';

import { actions } from './actions';

export const deskColumnsSlice = createSlice({
  name: 'desk-columns',
  initialState: {
    loading: false,
    entities: [] as Record<number, Columns[] | undefined>,
    afterCursor: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchDeskColumns.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchDeskColumns.fulfilled, (state, action: any) => {
        state.loading = false;
        const deskId = action.meta.arg.deskId;
        const existingColumns = state.entities[deskId] || [];
        state.entities[deskId] = [...existingColumns, ...action.payload.data];
        state.afterCursor = action.payload.cursor?.afterCursor;
      })
      .addCase(actions.fetchDeskColumns.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = deskColumnsSlice;
