import { combineReducers } from '@reduxjs/toolkit';

import { reducer as authReducer } from './auth';
import { reducer as commentsByPrayerIdReducer } from './comments';
import { reducer as deskColumnsReducer } from './desk-columns';
import { reducer as followedReducer } from './followed/slice';
import { reducer as prayerByIdReducer } from './prayer';
import { reducer as prayersByColumnIdReducer } from './prayers';
import { reducer as selfDesksReducer } from './self-desks';
import { reducer as usersDesksReducer } from './users-desks';

export const reducer = combineReducers({
  auth: authReducer,
  selfDesks: selfDesksReducer,
  usersDesks: usersDesksReducer,
  deskColumns: deskColumnsReducer,
  prayersByColumnId: prayersByColumnIdReducer,
  prayerById: prayerByIdReducer,
  commentsByPrayerId: commentsByPrayerIdReducer,
  followed: followedReducer,
});
