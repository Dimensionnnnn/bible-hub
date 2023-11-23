import axios, {AxiosInstance} from 'axios';

export class CustomAxios {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getBaseUrl() {
    return this.instance.defaults.baseURL;
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }
}
