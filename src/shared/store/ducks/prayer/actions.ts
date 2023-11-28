import { prayerByIdSlice } from './slice';
import { fetchPrayerByIdThunk } from './thunk';

export const actions = {
  ...prayerByIdSlice.actions,
  fetchPrayerById: fetchPrayerByIdThunk,
};
