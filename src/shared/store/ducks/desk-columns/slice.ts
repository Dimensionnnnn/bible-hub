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
      .addCase(actions.fetchMoreDeskColumns.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchDeskColumns.fulfilled, (state, action: any) => {
        state.loading = false;
        const deskId = action.meta.arg;
        state.entities[deskId] = [...action.payload.data];
        state.afterCursor = action.payload.cursor?.afterCursor;
      })
      .addCase(actions.fetchMoreDeskColumns.fulfilled, (state, action: any) => {
        const deskId = action.meta.arg.deskId;
        state.entities[deskId] = [...(state.entities[deskId] || []), ...action.payload.data];
      })
      .addCase(actions.fetchCreateColumn.fulfilled, (state, action: any) => {
        state.loading = false;
        const deskId = action.meta.arg.deskId;
        state.entities[deskId] = [...(state.entities[deskId] || []), action.payload];
      })
      .addCase(actions.fetchDeleteColumn.fulfilled, (state, action: any) => {
        const { columnId, deskId } = action.meta.arg;
        const existingColumns = state.entities[deskId] || [];
        state.entities[deskId] = [...existingColumns.filter((column) => column.id !== columnId)];
      })
      .addCase(actions.fetchDeskColumns.rejected, (state) => {
        state.loading = false;
      })
      .addCase(actions.fetchMoreDeskColumns.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = deskColumnsSlice;
