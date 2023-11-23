import {API_URL} from '@env';
import {CustomAxios} from '../../helpers';

export const authInstance = new CustomAxios(API_URL);
