import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Columns } from '@shared/api/generated';

import { actions } from './actions';

export type DeskColumnsStateType = {
  loading: boolean;
  entities: Record<number, Columns[]>;
  afterCursor?: string;
};

const initialState: DeskColumnsStateType = {
  loading: false,
  entities: {},
  afterCursor: undefined,
};

type EditColumnPayload = {
  columnId: number;
  deskId: number;
  title: string;
};

export const deskColumnsSlice = createSlice({
  name: 'desk-columns',
  initialState,
  reducers: {
    editColumnTitle: (state, action: PayloadAction<EditColumnPayload>) => {
      const { columnId, deskId, title } = action.payload;

      state.entities[deskId] = state.entities[deskId].map((column) => {
        if (column.id === columnId) {
          return { ...column, title };
        }
        return column;
      });
    },
  },
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
        const { deskId } = action.meta.arg;
        state.entities[deskId] = [...(state.entities[deskId] || []), ...action.payload.data];
      })
      .addCase(actions.fetchCreateColumn.fulfilled, (state, action: any) => {
        state.loading = false;
        const { deskId } = action.meta.arg;
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
