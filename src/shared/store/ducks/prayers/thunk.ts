import { createAsyncThunk } from '@reduxjs/toolkit';

import { Columns } from '@shared/api/';

export const fetchPrayersByColumnIdThunk = createAsyncThunk(
  'columns/id/prayers',
  async (columnId: number, thunkApi) => {
    try {
      const response = await Columns.columnsControllerFindPrayersByColumnId({ columnId });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data);
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
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
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);
