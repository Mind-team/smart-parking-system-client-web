export const useEndpoints = () => {
  return {
    driverData: () =>
      "https://smart-parking-system-server.herokuapp.com/api/v4/driver",
    registration: () =>
      "https://smart-parking-system-server.herokuapp.com/api/v4/driver/registration",
    lastParkingProcess: () =>
      "https://smart-parking-system-server.herokuapp.com/api/v4/parking/pp/last",
    parkingProcessById: (id: string) =>
      "https://smart-parking-system-server.herokuapp.com/api/v4/parking/pp/" +
      id,
    parkingProcesses: (driverId: string) =>
      "https://smart-parking-system-server.herokuapp.com/api/v4/driver/pp?driverId=" +
      driverId,
  };
};
