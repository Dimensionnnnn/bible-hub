import { AuthenticationApi, PrayerAPIV2DesksApi } from './generated';
import { authInstance, userInstance } from './lib/api';

export const Auth = new AuthenticationApi(undefined, authInstance.baseUrl(), authInstance.instance());

export const Desks = new PrayerAPIV2DesksApi(undefined, userInstance.baseUrl(), userInstance.instance());
