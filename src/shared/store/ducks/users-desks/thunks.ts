import { createAsyncThunk } from '@reduxjs/toolkit';
import { Desks } from '@shared/api/index';

export const fetchUsersDesksThunk = createAsyncThunk(
  'desks',
  async (args: { afterCursor?: string }, thunkApi) => {
    try {
      const { afterCursor } = args;
      const response = await Desks.deskControllerFind({
        afterCursor,
        limit: 10,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error instanceof Error ? error.message : null);
    }
  },
);
