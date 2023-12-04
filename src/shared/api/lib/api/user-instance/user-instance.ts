import { API_URL } from '@env';

import { store } from '@shared/store';
import { selectors } from '@shared/store/ducks/auth';

import { CustomAxiosWithInterceptors } from '../../helpers/custom-axios-with-interceptors';

export const userInstance = new CustomAxiosWithInterceptors(API_URL, {
  getToken: () => {
    const state = store.getState();
    return selectors.selectUserToken(state);
  },
});
