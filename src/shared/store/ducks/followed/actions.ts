import { followedSlice } from './slice';
import {
  fetchFollowPrayerThunk,
  fetchFollowedPrayersThunk,
  fetchUnfollowPrayerThunk,
} from './thunk';

export const actions = {
  ...followedSlice.actions,
  fetchFollowedPrayers: fetchFollowedPrayersThunk,
  fetchFollowPrayer: fetchFollowPrayerThunk,
  fetchUnfollowPrayer: fetchUnfollowPrayerThunk,
};
