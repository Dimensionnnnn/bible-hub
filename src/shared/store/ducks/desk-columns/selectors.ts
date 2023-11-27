import { RootState } from '@shared/store/store';

export const selectors = {
  selectDeskColumns: (deskId: number, state: RootState) => state.deskColumns.entities[deskId],
  selectLoading: (state: RootState) => state.deskColumns.loading,
  selectAfterCursor: (state: RootState) => state.deskColumns.afterCursor,
};
