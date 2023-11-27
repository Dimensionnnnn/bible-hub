import { CustomAxios } from './custom-axios';

export class CustomAxiosWithInterceptors extends CustomAxios {
  constructor(baseURL: string, config?: { getToken: () => string | undefined }) {
    super(baseURL);

    if (config?.getToken) {
      this.client.interceptors.request.use(
        (reqConfig) => {
          try {
            Object.assign(reqConfig.headers, { Authorization: `Bearer ${config?.getToken()}` });
            return reqConfig;
          } catch {
            return reqConfig;
          }
        },
        (e) => Promise.reject(e),
      );
    }
  }
}
