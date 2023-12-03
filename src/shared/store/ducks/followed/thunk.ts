import { createAsyncThunk } from '@reduxjs/toolkit';

import { Prayers as PrayersApi } from '@shared/api';
import { Prayers } from '@shared/api/generated';
import { RootState } from '@shared/store/store';

import { selectors } from '.';

export const fetchFollowedPrayersThunk = createAsyncThunk(
  'followed/prayers',
  async (_, thunkApi) => {
    try {
      const response = await PrayersApi.prayerControllerFindSubscribed();
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data);
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);

export const fetchFollowPrayerThunk = createAsyncThunk(
  'followed/prayers/id/follow',
  async (args: { prayerId: number; prayer: Prayers }, thunkApi) => {
    const { prayerId } = args;
    try {
      const response = await PrayersApi.prayerControllerSubscribe({ prayerId });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data);
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);

export const fetchUnfollowPrayerThunk = createAsyncThunk(
  'followed/prayers/id/unfollow',
  async (prayerId: number, thunkApi) => {
    try {
      const response = await PrayersApi.prayerControllerUnsubscribe({ prayerId });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data);
      } else {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);
