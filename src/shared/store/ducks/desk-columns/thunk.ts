import { createAsyncThunk } from '@reduxjs/toolkit';

import { Columns, Desks } from '@shared/api/';
import { requestConstants } from '@shared/constants/request-constants/request-constants';

export const fetchDeskColumnsThunk = createAsyncThunk(
  'desks/id/columns',
  async (deskId: number, thunkApi) => {
    try {
      const response = await Desks.deskControllerFindColumns({
        deskId,
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

export const fetchMoreDeskColumnsThunk = createAsyncThunk(
  'desks/id/columns/more',
  async (args: { deskId: number; afterCursor: string }, thunkApi) => {
    const { deskId, afterCursor } = args;

    try {
      const response = await Desks.deskControllerFindColumns({
        deskId,
        limit: requestConstants.limit,
        afterCursor,
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

export const fetchCreateColumnThunk = createAsyncThunk(
  'desks/my/create',
  async (args: { deskId: number; title: string }, thunkApi) => {
    const { title } = args;

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

export const fetchDeleteColumnThunk = createAsyncThunk(
  'desks/my/columns/id/delete',
  async (args: { columnId: number; deskId: number }, thunkApi) => {
    const { columnId } = args;

    try {
      const response = await Columns.columnsControllerDelete({ columnId });
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
