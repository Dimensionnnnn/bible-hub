import { RootState } from '@shared/store/store';

export const selectors = {
  selectPrayersByColumnId: (columnId: number, state: RootState) =>
    state.prayersByColumnId.entities[columnId],
  selectLoading: (state: RootState) => state.prayersByColumnId.loading,
};
