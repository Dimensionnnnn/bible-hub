import {authInstance, userInstance} from './lib/api';
import {AuthenticationApi, PrayerAPIV2DesksApi} from './generated';

export const Auth = new AuthenticationApi(
  undefined,
  authInstance.getBaseUrl(),
  authInstance.getInstance(),
);

export const Desks = new PrayerAPIV2DesksApi(
  undefined,
  userInstance.getBaseUrl(),
  userInstance.getInstance(),
);
