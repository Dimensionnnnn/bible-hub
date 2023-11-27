import axios, { AxiosInstance } from 'axios';

import { HttpClient } from './custom-http';

export class CustomAxios extends HttpClient<AxiosInstance> {
  constructor(baseURL: string) {
    super(
      axios.create({
        baseURL,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
  }

  baseUrl() {
    return this._client.defaults.baseURL || '';
  }

  instance(): AxiosInstance {
    return this._client;
  }
}
