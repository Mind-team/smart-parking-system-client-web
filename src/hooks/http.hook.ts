import { ServerResponse } from "../common/ServerResponse.interface";

export interface HttpRequest {
  readonly url: string;
  readonly method?: "GET" | "POST" | "PUT" | "DELETE";
  readonly body?: BodyInit;
  readonly headers?: HeadersInit;
}

export const useHttp = () => {
  return async<T>(configObject: HttpRequest): Promise<ServerResponse<T>> => {
    try {
      const { method, body, headers } = { ...configObject };
      const response = await fetch(configObject.url, { method, body, headers });
      return await response.json();
    } catch (e) {
      throw e;
    }
  };
};
