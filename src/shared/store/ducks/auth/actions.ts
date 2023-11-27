import { authSlice } from './slice';
import { fetchAuthSignInThunk, fetchAuthSignUpThunk } from './thunks';

export const actions = {
  ...authSlice.actions,
  signIn: fetchAuthSignInThunk,
  signUp: fetchAuthSignUpThunk,
};
