import { createAsyncThunk } from '@reduxjs/toolkit';

import { Desks } from '@shared/api/';

export const fetchDeskColumnsThunk = createAsyncThunk(
  'desks/id/columns',
  async (args: { deskId: number; afterCursor?: string }, thunkApi) => {
    const { deskId, afterCursor } = args;
    try {
      const response = await Desks.deskControllerFindColumns({ deskId, limit: 10, afterCursor });
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
