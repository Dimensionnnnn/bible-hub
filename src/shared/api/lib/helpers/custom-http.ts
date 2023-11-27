export abstract class HttpClient<T> {
  protected client: T;

  constructor(client: T) {
    this.client = client;
  }

  abstract baseUrl(): string;

  abstract instance(): T;
}
