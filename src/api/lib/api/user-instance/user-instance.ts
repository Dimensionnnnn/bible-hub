import {API_URL} from '@env';
import {CustomAxios} from '../../helpers';

export const userInstance = new CustomAxios(API_URL);
