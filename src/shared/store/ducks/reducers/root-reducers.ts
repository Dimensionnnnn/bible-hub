import {combineReducers} from '@reduxjs/toolkit';

import authReducer from './../slices/auth-slice';

const rootReducer = combineReducers({
  user: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
