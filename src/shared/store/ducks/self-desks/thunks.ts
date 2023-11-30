import { createAsyncThunk } from '@reduxjs/toolkit';

import { Desks } from '@shared/api/';

export const fetchSelfDesksThunk = createAsyncThunk('desks/my', async (_, thunkApi) => {
  try {
    const response = await Desks.deskControllerFindMy();
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return thunkApi.rejectWithValue(error.response.data);
    } else {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});
