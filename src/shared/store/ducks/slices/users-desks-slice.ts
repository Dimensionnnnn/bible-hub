import {Desks as DesksAPI} from '@api/index';
import {createCustomDesksSlice} from './helpers/custom-slice';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUsersDesks = createAsyncThunk(
  'desks',
  async (afterCursor?: string) => {
    const response = await DesksAPI.deskControllerFind({
      afterCursor,
      limit: 10,
    });
    return response.data;
  },
);

const usersDesksReducer = createCustomDesksSlice(
  'users-desks',
  fetchUsersDesks,
);

export default usersDesksReducer;
