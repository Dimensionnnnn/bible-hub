import { prayersByColumnIdSlice } from './slice';
import {
  fetchCreatePrayerThunk,
  fetchDeletePrayerThunk,
  fetchPrayersByColumnIdThunk,
} from './thunk';

export const actions = {
  ...prayersByColumnIdSlice.actions,
  fetchPrayersByColumnId: fetchPrayersByColumnIdThunk,
  fetchCreatePrayer: fetchCreatePrayerThunk,
  fetchDeletePrayer: fetchDeletePrayerThunk,
};
