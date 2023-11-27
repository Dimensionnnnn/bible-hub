import { RootState } from '@shared/store/store';

export const selectors = {
  selectDeskColumns: (state: RootState) => state.deskColumns.entities,
  selectLoading: (state: RootState) => state.deskColumns.loading,
  selectAfterCursor: (state: RootState) => state.deskColumns.afterCursor,
};
