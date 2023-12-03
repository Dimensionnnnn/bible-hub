import {
  AuthenticationApi,
  PrayerAPIV2ColumnsApi,
  PrayerAPIV2CommentsApi,
  PrayerAPIV2DesksApi,
  PrayerAPIV2PrayersApi,
} from './generated';
import { authInstance, userInstance } from './lib/api';

export const Auth = new AuthenticationApi(
  undefined,
  authInstance.baseUrl(),
  authInstance.instance(),
);

export const Desks = new PrayerAPIV2DesksApi(
  undefined,
  userInstance.baseUrl(),
  userInstance.instance(),
);

export const Columns = new PrayerAPIV2ColumnsApi(
  undefined,
  userInstance.baseUrl(),
  userInstance.instance(),
);

export const Prayers = new PrayerAPIV2PrayersApi(
  undefined,
  userInstance.baseUrl(),
  userInstance.instance(),
);

export const Comments = new PrayerAPIV2CommentsApi(
  undefined,
  userInstance.baseUrl(),
  userInstance.instance(),
);
