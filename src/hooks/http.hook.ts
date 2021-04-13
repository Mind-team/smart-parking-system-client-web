import { ServerResponse } from "../common/ServerResponse.interface";

type UpgradeBodyInit<U> = BodyInit | U;

export interface HttpRequest<T> {
  readonly url: string;
  readonly method?: "GET" | "POST" | "PUT" | "DELETE";
  readonly body?: UpgradeBodyInit<T>;
  readonly headers?: HeadersInit;
}

export const useHttp = () => {
  return async<T, U>(configObject: HttpRequest<T>): Promise<ServerResponse<U>> => {
    try {
      const { method, body, headers } = { ...configObject };
      const Tbody = body as BodyInit;
      const response = await fetch(configObject.url, { method, body: Tbody, headers });
      return await response.json();
    } catch (e) {
      throw e;
    }
  };
};
