export const useAPI = () => {
  return {
    signIn: () => "http://localhost:5000/api/v3/user/signIn",
    signUp: () => "http://localhost:5000/api/v3/user/signUp",
    addPlate: () => "http://localhost:5000/api/v3/user/addPlate",
    lastParkingHistoryElement: () =>
      "http://localhost:5000/api/v3/user/lastParkingHistoryElement",
    parkingDetails: (id: string) => `/parkingDetails/${id}`,
  };
};
