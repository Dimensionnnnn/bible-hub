import {combineReducers} from '@reduxjs/toolkit';

import authReducer from './../slices/auth-slice';
import usersDesksReducer from './../slices/users-desks-slice';
import selfDesksReducer from '../slices/self-desks-slice';

const rootReducer = combineReducers({
  user: authReducer,
  usersDesks: usersDesksReducer,
  selfDesks: selfDesksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
