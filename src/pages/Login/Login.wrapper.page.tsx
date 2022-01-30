import { Login } from "./Login.page";
import { FC, useState } from "react";
import { useDriverApi } from "../../hooks/api";
import { useNavigate } from "react-router-dom";

export const LoginWrapper: FC = () => {
  const driverApi = useDriverApi();
  const navigate = useNavigate();
  const [isError, setError] = useState(false);

  const handleLoginClick = (phone: string, confirmationCode: string) => {
    driverApi
      .login({ phoneNumber: phone, confirmationCode }, "v4")
      .then((response) => {
        // if (response && "error" in response) {
        // }
        if (response && "accessToken" in response) {
          localStorage.setItem("at", response.accessToken);
          navigate("/home");
        }
      });
  };

  const handleCodeClick = (phone: string) => {
    driverApi.sendConfirmationCode(phone, "v4").then((r) => {
      if (r && "error" in r) {
        setError(true);
      }
    });
  };

  // if (auth.accessToken) {
  //   return (
  //     <Routes>
  //       <Route element={<Navigate to={route.home.main} />} />
  //     </Routes>
  //   );
  // }

  return (
    <Login
      onLoginClick={handleLoginClick}
      onSendCodeClick={handleCodeClick}
      isError={isError}
    />
  );
};
