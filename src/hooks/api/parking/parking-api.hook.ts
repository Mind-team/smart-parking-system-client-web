import { useHttp } from "../../http";
import { useEndpoint } from "../endpoint.hook";
import { GetLastParkingProcessDto } from "./dto/get-last-parking-process.dto";

const request = useHttp();
const endpoint = useEndpoint();

const lastParkingProcess = async (
  accessToken: string | null,
  appVersion: string,
) => {
  if (!accessToken) {
    return null; // HANDLE
  }
  return await request<null, GetLastParkingProcessDto>({
    url: endpoint + appVersion + "/parking/pp/last",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const useParkingApi = () => {
  const accessToken = localStorage.getItem("at");
  return {
    lastParkingProcess: (appVersion = "v4") =>
      lastParkingProcess(accessToken, appVersion),
  };
};
