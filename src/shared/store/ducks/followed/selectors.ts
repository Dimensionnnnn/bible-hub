import { RootState } from '@shared/store/store';

export const selectors = {
  selectFollowedPrayers: (state: RootState) => state.followed.entities,
  selectLoading: (state: RootState) => state.followed.loading,
};
