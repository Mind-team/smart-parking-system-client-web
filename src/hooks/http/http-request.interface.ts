export interface IBaseHttpRequest {
  readonly url: string;
  readonly headers?: HeadersInit;
}

export interface IGetHttpRequest extends IBaseHttpRequest {
  readonly method: "GET";
}

export interface IPostHttpRequest<T> extends IBaseHttpRequest {
  readonly method: "POST";
  readonly body: T;
}

export type IHttpRequest<T> = IGetHttpRequest | IPostHttpRequest<T>;
