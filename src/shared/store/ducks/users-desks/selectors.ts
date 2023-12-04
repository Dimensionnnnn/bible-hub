import { RootState } from '@shared/store/store';

export const selectors = {
  selectUsersDesks: (state: RootState) => state.usersDesks.entities,
  selectLoading: (state: RootState) => state.usersDesks.loading,
  selectAfterCursor: (state: RootState) => state.usersDesks.afterCursor,
};
