import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { Users } from '@shared/api/generated';

import { actions } from './actions';

export type AuthStateType = {
  loading: boolean;
  currentUser: Users | null;
  isAuthenticated: boolean;
};

const initialState: AuthStateType = {
  loading: false,
  currentUser: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
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

export const { reducer } = authSlice;
