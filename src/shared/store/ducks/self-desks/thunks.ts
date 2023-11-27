import { createAsyncThunk } from '@reduxjs/toolkit';

import { Desks } from '@shared/api/';

export const fetchSelfDesksThunk = createAsyncThunk('desks/my', async (_, thunkApi) => {
  try {
    const response = await Desks.deskControllerFindMy();
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error instanceof Error ? error.message : null);
  }
});
