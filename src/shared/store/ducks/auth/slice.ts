import { Users } from '@api/generated';
import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { actions } from './actions';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    currentUser: null as Users | null,
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending(actions.signIn, actions.signUp), (state) => {
      state.loading = true;
    });
    builder.addMatcher(isFulfilled(actions.signIn, actions.signUp), (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addMatcher(isRejected(actions.signIn, actions.signUp), (state) => {
      state.loading = false;
      state.currentUser = null;
      state.isAuthenticated = false;
    });
  },
});

export const reducer = authSlice.reducer;
