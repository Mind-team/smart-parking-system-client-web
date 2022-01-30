import { IHttpRequest } from "./http-request.interface";

export const useHttp = () => {
  return async <Req, Res>(
    configObject: IHttpRequest<Req>,
  ): Promise<Res | null> => {
    if (!configObject || !configObject.url) {
      throw new Error("П");
    }
    if (
      configObject.method !== "GET" &&
      "body" in configObject &&
      configObject.url
    ) {
      try {
        const response = await fetch(configObject.url, {
          method: configObject.method,
          body: JSON.stringify(configObject.body),
          headers: "headers" in configObject ? configObject.headers : {},
        });
        return await response.json();
      } catch (e) {
        return null;
      }
    }
    try {
      const response = await fetch(configObject.url, {
        method: "GET",
        headers: "headers" in configObject ? configObject.headers : {},
      });
      return await response.json();
    } catch (e) {
      throw new Error("Что то не так");
    }
  };
};
