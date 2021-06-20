import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Redirect } from "react-router-dom";
import { SignInDto } from "../../common/SignInDto";
import { UserRecord } from "../../common/UserRecord.interface";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { SignIn } from "./SignIn";
import { SignInMobile } from "./SignInMobile";

export const SignInContainer: FC = () => {
  const [req, routes, api, width, notification] = [
    useHttp(),
    useRoutes(),
    useAPI(),
    useWindowDimensions().width,
    useNotification(),
  ];
  const [userData, setUserData] = useState<UserRecord>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const fetch = (params?: [string, string]) => 
    req<SignInDto, UserRecord>({
      url: api.signIn(),
      method: "POST",
      body: {
        phoneNumber: params?.[0] ?? phoneNumber,
        password: params?.[1] ?? password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

  const handleInput = (event: any, type: "phoneNumber" | "password") =>
    type === "phoneNumber"
      ? setPhoneNumber(event.target.value)
      : setPassword(event.target.value);

  const handleSubmit = () => {
    notification.loading();
    fetch().then((result) => {
      if (!result.isExpected) {
        notification.cancel().error(result.message);
        return;
      }
      notification.cancel().loading();
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("password", password);
      setUserData(result.value);
    });
  };

  useEffect(() => {
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
      return;
    }
    fetch([phoneNumber, password]).then((result) => {
      if (!result.isExpected) {
        return;
      }
      setUserData(result.value);
    });
  }, []);

  if (userData) {
    return <Redirect to={routes.home()} />;
  }

  return (
    <>
      {width > 760 ? (
        <SignIn handleInput={handleInput} handleSubmit={handleSubmit} />
      ) : (
        <SignInMobile handleInput={handleInput} handleSubmit={handleSubmit} />
      )}
    </>
  );
};
