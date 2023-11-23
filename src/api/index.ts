import {authInstance} from './lib/api';
import {AuthenticationApi} from './generated';

export const Auth = new AuthenticationApi(
  undefined,
  authInstance.getBaseUrl(),
  authInstance.getInstance(),
);
