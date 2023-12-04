import { commentsByPrayerIdSlice } from './slice';
import {
  fetchCommentsByPrayerIdThunk,
  fetchCreateCommentByPrayerIdThunk,
  fetchMoreCommentsByPrayerIdThunk,
} from './thunk';

export const actions = {
  ...commentsByPrayerIdSlice.actions,
  fetchCommentsByPrayerId: fetchCommentsByPrayerIdThunk,
  fetchMoreCommentsByPrayerId: fetchMoreCommentsByPrayerIdThunk,
  fetchCreateCommentByPrayerId: fetchCreateCommentByPrayerIdThunk,
};
