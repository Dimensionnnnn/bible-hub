import { combineReducers } from '@reduxjs/toolkit';

import { reducer as authReducer } from './auth';
import { reducer as selfDesksReducer } from './self-desks';
import { reducer as usersDesksReducer } from './users-desks';

export const reducer = combineReducers({
  auth: authReducer,
  selfDesks: selfDesksReducer,
  usersDesks: usersDesksReducer,
});
