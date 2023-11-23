import {Auth} from '@api/index';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {AuthSignInDto, AuthSignUpDto, Users} from 'src/api/generated/models';
import {isPending, isFulfilled, isRejected} from './helpers/helpers';

export const fetchAuthSignIn = createAsyncThunk(
  'auth/sign-in',
  async (userData: AuthSignInDto) => {
    const response = await Auth.authControllerSignIn({authSignInDto: userData});
    return response.data;
  },
);

export const fetchAuthSignUp = createAsyncThunk(
  'auth/sign-up',
  async (userData: AuthSignUpDto) => {
    const response = await Auth.authControllerSignUp({authSignUpDto: userData});
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    currentUser: null as Users | null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(isPending(fetchAuthSignIn, fetchAuthSignUp), state => {
      state.loading = true;
    });
    builder.addMatcher(
      isFulfilled(fetchAuthSignIn, fetchAuthSignUp),
      (state, action) => {
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      },
    );
    builder.addMatcher(isRejected(fetchAuthSignIn, fetchAuthSignUp), state => {
      state.loading = false;
      state.currentUser = null;
      state.isAuthenticated = false;
    });
  },
});

export default userSlice.reducer;
