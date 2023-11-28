import { createAsyncThunk } from '@reduxjs/toolkit';

import { Comments } from '@shared/api/';

export const fetchCommentsByPrayerIdThunk = createAsyncThunk(
  'prayers/id',
  async (ars: { prayerId: number; afterCursor?: string }, thunkApi) => {
    const { prayerId, afterCursor } = ars;
    try {
      const response = await Comments.commentsControllerGetComments({
        prayerId,
        limit: 10,
        afterCursor,
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data);
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);
