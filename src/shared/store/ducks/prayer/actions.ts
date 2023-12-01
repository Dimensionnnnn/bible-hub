import { prayerByIdSlice } from './slice';
import { fetchPrayerByIdThunk, fetchPrayerDoThunk } from './thunk';

export const actions = {
  ...prayerByIdSlice.actions,
  fetchPrayerById: fetchPrayerByIdThunk,
  fetchPrayerDo: fetchPrayerDoThunk,
};
