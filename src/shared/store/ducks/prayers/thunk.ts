import { createAsyncThunk } from '@reduxjs/toolkit';

import { Columns, Prayers } from '@shared/api/';

export const fetchPrayersByColumnIdThunk = createAsyncThunk(
  'columns/id/prayers',
  async (columnId: number, thunkApi) => {
    try {
      const response = await Columns.columnsControllerFindPrayersByColumnId({ columnId });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data);
      }
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const fetchCreatePrayerThunk = createAsyncThunk(
  'columns/id/prayers/create',
  async (args: { columnId: number; title: string }, thunkApi) => {
    const { columnId, title } = args;

    try {
      const response = await Columns.columnsControllerCreatePrayer({
        columnId,
        prayersDto: {
          title,
          description: '',
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data);
      }
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const fetchDeletePrayerThunk = createAsyncThunk(
  'columns/id/prayers/id/delete',
  async (args: { columnId: number; prayerId: number }, thunkApi) => {
    const { prayerId } = args;

    try {
      const response = await Prayers.prayerControllerDelete({
        prayerId,
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data);
      }
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
