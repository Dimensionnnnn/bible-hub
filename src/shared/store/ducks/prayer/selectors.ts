import { RootState } from '@shared/store/store';

export const selectors = {
  selectCurrentPrayer: (state: RootState) => state.prayerById.entity,
  selectLoading: (state: RootState) => state.prayerById.loading,
};
