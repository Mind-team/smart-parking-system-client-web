export const useRoutes = () => {
  return {
    signIn: () => "/signIn",
    signUp: () => "/signUp",
    home: () => "/home",
    history: () => "/history",
    parkings: () => "/parkings",
    profile: () => "/profile",
    startup: () => "/",
    parkingDetails: (id: number | string) => "/parkingDetails/" + id,
  };
};
