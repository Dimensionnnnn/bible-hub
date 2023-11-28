import { combineReducers } from '@reduxjs/toolkit';

import { reducer as authReducer } from './auth';
import { reducer as deskColumnsReducer } from './desk-columns';
import { reducer as prayersByColumnIdReducer } from './prayers';
import { reducer as selfDesksReducer } from './self-desks';
import { reducer as usersDesksReducer } from './users-desks';

export const reducer = combineReducers({
  auth: authReducer,
  selfDesks: selfDesksReducer,
  usersDesks: usersDesksReducer,
  deskColumns: deskColumnsReducer,
  prayersByColumnId: prayersByColumnIdReducer,
});
