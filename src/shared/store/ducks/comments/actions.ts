import { commentsByPrayerIdSlice } from './slice';
import { fetchCommentsByPrayerIdThunk, fetchMoreCommentsByPrayerIdThunk } from './thunk';

export const actions = {
  ...commentsByPrayerIdSlice.actions,
  fetchCommentsByPrayerId: fetchCommentsByPrayerIdThunk,
  fetchMoreCommentsByPrayerId: fetchMoreCommentsByPrayerIdThunk,
};
