import { Login } from "./Login.page";
import { FC, useState } from "react";
import { useDriverApi } from "../../hooks/api";
import { useNavigate } from "react-router-dom";
import { useRoute } from "../../hooks/routes";
import { useAuth } from "../../hooks/auth";

export const LoginWrapper: FC = () => {
  const driverApi = useDriverApi();
  const route = useRoute();
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [isError, setError] = useState(false);

  const handleLoginClick = (phone: string, confirmationCode: string) => {
    driverApi
      .login({ phoneNumber: phone, confirmationCode }, "v4")
      .then((response) => {
        // if (response && "error" in response) {
        // }
        if (response && "accessToken" in response) {
          setAuth({ accessToken: response.accessToken });
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
