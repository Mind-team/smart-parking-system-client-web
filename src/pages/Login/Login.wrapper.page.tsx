import { Login } from "./Login.page";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDriverApi, useCache } from "@ermolaev/mind-common";

export const LoginWrapper: FC = () => {
  const driverApi = useDriverApi("");
  const cache = useCache();
  const navigate = useNavigate();
  const [isError, setError] = useState(false);

  console.log(cache.read("driver"));

  const handleLoginClick = (phone: string, confirmationCode: string) => {
    driverApi
      .login({ phoneNumber: phone, confirmationCode }, "v4")
      .then((response) => {
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

  return (
    <Login
      onLoginClick={handleLoginClick}
      onSendCodeClick={handleCodeClick}
      isError={isError}
    />
  );
};
