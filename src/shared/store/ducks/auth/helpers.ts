import { AnyAction, AsyncThunk } from '@reduxjs/toolkit';

export function isPending(...actions: AsyncThunk<any, any, any>[]) {
  return (action: AnyAction): action is ReturnType<(typeof actions)[number]['pending']> =>
    actions.some((a) => a.pending.match(action));
}

export function isFulfilled(...actions: AsyncThunk<any, any, any>[]) {
  return (action: AnyAction): action is ReturnType<(typeof actions)[number]['fulfilled']> =>
    actions.some((a) => a.fulfilled.match(action));
}

export function isRejected(...actions: AsyncThunk<any, any, any>[]) {
  return (action: AnyAction): action is ReturnType<(typeof actions)[number]['rejected']> =>
    actions.some((a) => a.rejected.match(action));
}
