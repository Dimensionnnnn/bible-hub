import { createAsyncThunk } from '@reduxjs/toolkit';

import { Prayers } from '@shared/api/';

export const fetchPrayerByIdThunk = createAsyncThunk(
  'prayers/id',
  async (prayerId: number, thunkApi) => {
    try {
      const response = await Prayers.prayerControllerFindById({ prayerId });
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
