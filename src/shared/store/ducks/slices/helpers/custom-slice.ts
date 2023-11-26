import {Desks} from '@api/generated';
import {SerializedError, createSlice} from '@reduxjs/toolkit';

export const createCustomDesksSlice = (name: string, asyncThunkAction: any) => {
  const customSlice = createSlice({
    name,
    initialState: {
      entities: [] as Desks[] | undefined,
      loading: false,
      error: null as unknown as SerializedError,
      afterCursor: undefined as string | undefined,
    },
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(asyncThunkAction.pending, state => {
          state.loading = true;
        })
        .addCase(asyncThunkAction.fulfilled, (state, action: any) => {
          state.loading = false;
          state.entities = state.entities
            ? [...state.entities, ...action.payload.data]
            : action.payload.data;
          state.afterCursor = action.payload.cursor?.afterCursor || null;
        })
        .addCase(asyncThunkAction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error;
        });
    },
  });

  return customSlice.reducer;
};
