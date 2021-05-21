export const useAPI = () => {
  return {
    signIn: () => "http://localhost:5000/user/signIn",
    signUp: () => "http://localhost:5000/user/signUp",
    addPlate: () => "http://localhost:5000/user/addPlate"
  };
};