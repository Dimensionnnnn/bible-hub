import { createAsyncThunk } from '@reduxjs/toolkit';

import { Desks } from '@shared/api/index';
import { requestConstants } from '@shared/constants/request-constants/request-constants';

export const fetchUsersDesksThunk = createAsyncThunk('desks', async (_, thunkApi) => {
  try {
    const response = await Desks.deskControllerFind({
      limit: requestConstants.limit,
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
  async (args: { afterCursor: string }, thunkApi) => {
    const { afterCursor } = args;

    try {
      const response = await Desks.deskControllerFind({
        afterCursor,
        limit: requestConstants.limit,
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
