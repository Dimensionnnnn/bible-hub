import { createSlice } from '@reduxjs/toolkit';

import { Comments } from '@shared/api/generated';

import { actions } from './actions';

export type CommentsStateType = {
  comments: {
    loading: boolean;
    entities: Record<number, Comments[]>;
    afterCursor?: string;
  };
};

const initialState: CommentsStateType['comments'] = {
  loading: false,
  entities: {},
  afterCursor: undefined,
};

export const commentsByPrayerIdSlice = createSlice({
  name: 'comments-by-prayer-id',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.fetchCommentsByPrayerId.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchMoreCommentsByPrayerId.pending, (state) => {
        state.loading = true;
      })
      .addCase(actions.fetchCommentsByPrayerId.fulfilled, (state, action: any) => {
        state.loading = false;
        const prayerId = action.meta.arg;
        state.entities[prayerId] = [...action.payload.data];
        state.afterCursor = action.payload.cursor?.afterCursor;
      })
      .addCase(actions.fetchMoreCommentsByPrayerId.fulfilled, (state, action: any) => {
        state.loading = false;
        const { prayerId } = action.meta.arg;
        state.entities[prayerId] = [...(state.entities[prayerId] || []), ...action.payload.data];
        state.afterCursor = action.payload.cursor?.afterCursor;
      })
      .addCase(actions.fetchCreateCommentByPrayerId.fulfilled, (state, action: any) => {
        const { prayerId } = action.meta.arg;
        state.entities[prayerId] = [...(state.entities[prayerId] || []), action.payload];
      })
      .addCase(actions.fetchCommentsByPrayerId.rejected, (state) => {
        state.loading = false;
      })
      .addCase(actions.fetchMoreCommentsByPrayerId.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reducer } = commentsByPrayerIdSlice;
