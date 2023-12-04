import { RootState } from '@shared/store/store';

export const selectors = {
  selectPrayersByColumnId: (state: RootState, columnId: number) =>
    state.prayersByColumnId.entities[columnId],
  selectLoading: (state: RootState) => state.prayersByColumnId.loading,
};
