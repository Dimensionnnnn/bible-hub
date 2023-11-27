import { createAsyncThunk } from '@reduxjs/toolkit';

import { Auth } from '@shared/api';
import { AuthSignInDto, AuthSignUpDto } from '@shared/api/generated';

export const fetchAuthSignInThunk = createAsyncThunk(
  'auth/sign-in',
  async (userData: AuthSignInDto, thunkApi) => {
    try {
      const response = await Auth.authControllerSignIn({ authSignInDto: userData });
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

export const fetchAuthSignUpThunk = createAsyncThunk(
  'auth/sign-up',
  async (userData: AuthSignUpDto, thunkApi) => {
    try {
      const response = await Auth.authControllerSignUp({ authSignUpDto: userData });
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
