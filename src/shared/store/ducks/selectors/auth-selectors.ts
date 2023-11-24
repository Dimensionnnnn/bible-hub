import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store/store';

const selectUserToken = (state: RootState) => state.user.currentUser?.token;

const selectAuthStatus = (state: RootState) => state.user.isAuthenticated;

export const getUserToken = createSelector(selectUserToken, token => token);
export const isUserAuth = createSelector(selectAuthStatus, status => status);
