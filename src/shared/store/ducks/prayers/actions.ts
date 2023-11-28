import { prayersByColumnIdSlice } from './slice';
import { fetchPrayersByColumnId } from './thunk';

export const actions = {
  ...prayersByColumnIdSlice.actions,
  fetchPrayersByColumnId: fetchPrayersByColumnId,
};
