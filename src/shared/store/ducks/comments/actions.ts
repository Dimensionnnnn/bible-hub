import { commentsByPrayerIdSlice } from './slice';
import { fetchCommentsByPrayerIdThunk } from './thunk';

export const actions = {
  ...commentsByPrayerIdSlice.actions,
  fetchCommentsByPrayerId: fetchCommentsByPrayerIdThunk,
};
