import {API_URL} from '@env';
import {CustomAxios} from '../../helpers';
import {getUserToken} from '@shared/store/ducks/selectors/auth-selectors';
import {store} from '@shared/store/ducks/store/store';

const userInstance = new CustomAxios(API_URL);

userInstance.getInstance().interceptors.request.use(
  config => {
    try {
      const state = store.getState();
      const token = getUserToken(state);
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    } catch {
      return config;
    }
  },
  e => Promise.reject(e),
);

export {userInstance};
