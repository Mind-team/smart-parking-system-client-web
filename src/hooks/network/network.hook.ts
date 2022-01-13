export interface HttpRequest<Body> {
  readonly url: string;
  readonly method?: "GET" | "POST" | "PUT" | "DELETE";
  readonly body?: Body;
  readonly headers?: HeadersInit;
}

export const useNetwork = () => {
  return async <Request, Response>(
    configObject: HttpRequest<Request>,
  ): Promise<Response> => {
    const { method, body, headers } = { ...configObject };
    const response = await fetch(configObject.url, {
      method,
      body: JSON.stringify(body),
      headers,
    });
    return await response.json();
  };
};
