import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Prayers } from '@shared/api/generated';

import { actions as deskColumnsActions } from '../desk-columns';
import { actions as prayerActions } from '../prayer';
import { actions } from './actions';

export type PrayersByColumnIdStateType = {
  loading: boolean;
  entities: Record<number, Prayers[]>;
};

const initialState: PrayersByColumnIdStateType = {
  loading: false,
  entities: {},
};

type EditPrayerTitlePayload = {
  columnId: number;
  prayerId: number;
  title: string;
};

export const prayersByColumnIdSlice = createSlice({
  name: 'prayers-by-column-id',
  initialState,
  reducers: {
    editPrayerTitle: (state, action: PayloadAction<EditPrayerTitlePayload>) => {
      const { columnId, prayerId, title } = action.payload;
      state.entities[columnId] = state.entities[columnId].map((prayer) => {
        if (prayer.id === prayerId) {
          return { ...prayer, title };
        }
        return prayer;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchPrayersByColumnId.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchPrayersByColumnId.fulfilled, (state, action: any) => {
        state.loading = false;
        const columnId = action.meta.arg;
        state.entities[columnId] = action.payload;
      })
      .addCase(actions.fetchCreatePrayer.fulfilled, (state, action: any) => {
        const { columnId } = action.meta.arg;
        const existingColumns = state.entities[columnId] || [];
        state.entities[columnId] = [...existingColumns, action.payload];
      })
      .addCase(actions.fetchDeletePrayer.fulfilled, (state, action: any) => {
        const { columnId, prayerId } = action.meta.arg;
        const existingColumns = state.entities[columnId] || [];
        state.entities[columnId] = [...existingColumns.filter((prayer) => prayer.id !== prayerId)];
      })
      .addCase(deskColumnsActions.fetchDeleteColumn.fulfilled, (state, action: any) => {
        const { columnId } = action.meta.arg;
        delete state.entities[columnId];
      })
      .addCase(prayerActions.fetchPrayerDo.fulfilled, (state, action: any) => {
        const { columnId, prayerId } = action.meta.arg;
        const existingColumns = state.entities[columnId] || [];
        state.entities[columnId] = [
          ...existingColumns.map((prayer) => {
            if (prayer.id === prayerId) {
              return action.payload;
            }
            return prayer;
          }),
        ];
      });
  },
});

export const { reducer } = prayersByColumnIdSlice;
