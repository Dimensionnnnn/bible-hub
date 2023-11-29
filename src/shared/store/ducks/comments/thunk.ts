import { createAsyncThunk } from '@reduxjs/toolkit';

import { Comments } from '@shared/api/';

export const fetchCommentsByPrayerIdThunk = createAsyncThunk(
  'prayers/id/comments',
  async (prayerId: number, thunkApi) => {
    try {
      const response = await Comments.commentsControllerGetComments({
        prayerId,
        limit: 10,
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

export const fetchMoreCommentsByPrayerIdThunk = createAsyncThunk(
  'prayers/id/comments/more',
  async (args: { prayerId: number; afterCursor?: string }, thunkApi) => {
    const { prayerId, afterCursor } = args;

    if (!afterCursor) {
      return thunkApi.rejectWithValue('No cursor provided for fetching more comments');
    }

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

export const fetchCreateCommentByPrayerIdThunk = createAsyncThunk(
  'prayers/id/comments/create',
  async (args: { prayerId: number; body: string }, thunkApi) => {
    const { prayerId, body } = args;
    try {
      const response = await Comments.commentsControllerAddCommentToPrayer({
        prayerId,
        commentsDto: {
          body,
        },
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
