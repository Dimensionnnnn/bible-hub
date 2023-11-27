import { createAsyncThunk } from '@reduxjs/toolkit';
import { Desks } from '@shared/api/';

export const fetchSelfDesksThunk = createAsyncThunk('desks/my', async () => {
  const response = await Desks.deskControllerFindMy();
  return response.data;
});
