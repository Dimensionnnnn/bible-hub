import { RootState } from '@shared/store/store';

export const selectors = {
  selectLoading: (state: RootState) => state.commentsByPrayerId.loading,
  selectComments: (state: RootState, prayerId: number) =>
    state.commentsByPrayerId.entities[prayerId],
  selectAfterCursor: (state: RootState) => state.commentsByPrayerId.afterCursor,
};
