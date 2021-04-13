import { ServerResponse } from "../common/ServerResponse.interface";

type UpgradeBodyInit<U> = BodyInit | U;

export interface HttpRequest<T> {
  readonly url: string;
  readonly method?: "GET" | "POST" | "PUT" | "DELETE";
  readonly body?: UpgradeBodyInit<T>;
  readonly headers?: HeadersInit;
}

export const useHttp = () => {
  return async<In, Out>(configObject: HttpRequest<In>): Promise<ServerResponse<Out>> => {
    try {
      const { method, body, headers } = { ...configObject };
      const _body = body as BodyInit;
      const response = await fetch(configObject.url, { method, body: _body, headers });
      return await response.json();
    } catch (e) {
      throw e;
    }
  };
};
