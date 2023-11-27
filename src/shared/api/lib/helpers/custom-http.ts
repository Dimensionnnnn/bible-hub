export abstract class HttpClient<T> {
  protected _client: T;

  constructor(client: T) {
    this._client = client;
  }

  abstract baseUrl(): string;
  abstract instance(): T;
}
