import { createSlice } from '@reduxjs/toolkit';

import { Comments } from '@shared/api/generated';

import { actions } from './actions';

export const commentsByPrayerIdSlice = createSlice({
  name: 'comments-by-prayer-id',
  initialState: {
    loading: false,
    entities: [] as Record<number, Comments[] | undefined>,
    afterCursor: undefined as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchCommentsByPrayerId.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchCommentsByPrayerId.fulfilled, (state, action: any) => {
        state.loading = false;
        const prayerId = action.meta.arg;
        const existingComments = state.entities[prayerId] || [];
        state.entities[prayerId] = [...existingComments, ...action.payload.data];
        state.afterCursor = action.payload.cursor?.afterCursor;
      })
      .addCase(actions.fetchCommentsByPrayerId.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = commentsByPrayerIdSlice;
