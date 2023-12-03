import { createAsyncThunk } from '@reduxjs/toolkit';

import { Columns, Desks } from '@shared/api/';

export const fetchDeskColumnsThunk = createAsyncThunk(
  'desks/id/columns',
  async (deskId: number, thunkApi) => {
    try {
      const response = await Desks.deskControllerFindColumns({ deskId, limit: 10 });
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

export const fetchMoreDeskColumnsThunk = createAsyncThunk(
  'desks/id/columns/more',
  async (args: { deskId: number; afterCursor?: string }, thunkApi) => {
    const { deskId, afterCursor } = args;

    if (!afterCursor) {
      return thunkApi.rejectWithValue('No cursor provided for fetching more columns');
    }

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

export const fetchCreateColumnThunk = createAsyncThunk(
  'desks/my/create',
  async (args: { deskId?: number; title: string }, thunkApi) => {
    const { deskId, title } = args;

    if (!deskId) {
      return thunkApi.rejectWithValue('No deskId provided for creating column');
    }

    try {
      const response = await Columns.columnsControllerCreate({
        columnsDto: { title, description: '' },
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
