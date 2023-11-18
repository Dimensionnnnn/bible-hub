import {axiosApi} from '../lib/api';
import {V1AdminsApi} from './generated';

export const Admins = new V1AdminsApi(
  undefined,
  axiosApi.getBaseUrl(),
  axiosApi.getInstance(),
);
