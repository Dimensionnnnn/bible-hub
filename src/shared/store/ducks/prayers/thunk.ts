import { createAsyncThunk } from '@reduxjs/toolkit';

import { Columns } from '@shared/api/';

export const fetchPrayersByColumnId = createAsyncThunk(
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
