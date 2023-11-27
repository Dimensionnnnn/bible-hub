import { RootState } from '@shared/store/store';

export const selectors = {
  selectSelfDesks: (state: RootState) => state.selfDesks.entities,
  selectLoading: (state: RootState) => state.selfDesks.loading,
  selectError: (state: RootState) => state.selfDesks.error,
};
