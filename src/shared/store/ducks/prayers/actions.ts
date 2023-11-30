import { prayersByColumnIdSlice } from './slice';
import { fetchCreatePrayerThunk, fetchPrayersByColumnIdThunk } from './thunk';

export const actions = {
  ...prayersByColumnIdSlice.actions,
  fetchPrayersByColumnId: fetchPrayersByColumnIdThunk,
  fetchCreatePrayer: fetchCreatePrayerThunk,
};
