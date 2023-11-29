import { createAsyncThunk } from '@reduxjs/toolkit';

import { Desks } from '@shared/api/index';

export const fetchUsersDesksThunk = createAsyncThunk('desks', async (_, thunkApi) => {
  try {
    const response = await Desks.deskControllerFind({
      limit: 10,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return thunkApi.rejectWithValue(error.response.data);
    } else {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const fetchMoreUsersDesksThunk = createAsyncThunk(
  'desks/more',
  async (args: { afterCursor?: string }, thunkApi) => {
    const { afterCursor } = args;

    if (!afterCursor) {
      return thunkApi.rejectWithValue('No cursor provided for fetching more desks');
    }

    try {
      const response = await Desks.deskControllerFind({
        afterCursor,
        limit: 10,
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
