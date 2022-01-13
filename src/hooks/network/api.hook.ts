import { useEndpoints } from "./endpoints.hook";
import { GetLastParkingProcessResponseDto } from "../../dto/parking-process/get-last-parking-process-response.dto";

const api = useEndpoints();

const getParkingProcessById = async (id: string) => {
  const data = await fetch(api.parkingProcessById(id));
  return await data.json();
};

const getLastParkingProcess = async (
  jwtToken: string,
): Promise<GetLastParkingProcessResponseDto> => {
  const data = await fetch(api.lastParkingProcess(), {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwtToken,
    },
  });
  return await data.json();
};

const getParkingProcesses = async (jwtToken: string, driverId: string) => {
  const data = await fetch(api.parkingProcesses(driverId), {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwtToken,
    },
  });
  return await data.json();
};

const getDriverData = async (jwtToken: string) => {
  const data = await fetch(api.driverData(), {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwtToken,
    },
  });
  return await data.json();
};

export const useApi = () => {
  return {
    getParkingProcessById,
    getLastParkingProcess,
    getParkingProcesses,
    getDriverData,
  };
};
