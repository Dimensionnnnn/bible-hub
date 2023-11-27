import { createAsyncThunk } from '@reduxjs/toolkit';
import { Desks } from '@shared/api/index';

export const fetchUsersDesksThunk = createAsyncThunk('desks', async (afterCursor?: string) => {
  const response = await Desks.deskControllerFind({
    afterCursor,
    limit: 10,
  });
  return response.data;
});
