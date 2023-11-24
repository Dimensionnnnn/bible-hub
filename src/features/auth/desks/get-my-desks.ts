import {Desks} from '@api/index';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getMyDesks = createAsyncThunk('desks/my', async () => {
  const response = await Desks.deskControllerFindMy();
  return response.data;
});
