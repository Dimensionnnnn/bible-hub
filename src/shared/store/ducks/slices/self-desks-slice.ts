import {Desks as DesksAPI} from '@api/index';
import {createCustomDesksSlice} from './helpers/custom-slice';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchSelfDesks = createAsyncThunk('desks/my', async () => {
  const response = await DesksAPI.deskControllerFindMy();
  return response.data;
});

const selfDesksReducer = createCustomDesksSlice('self-desks', fetchSelfDesks);

export default selfDesksReducer;
