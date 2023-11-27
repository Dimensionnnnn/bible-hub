import { RootState } from '@shared/store/store';

export const selectors = {
  selectCurrentUser: (state: RootState) => state.auth.currentUser,
  selectLoading: (state: RootState) => state.auth.loading,
  selectUserToken: (state: RootState) => state.auth.currentUser?.token,
  selectAuthStatus: (state: RootState) => state.auth.isAuthenticated,
};
