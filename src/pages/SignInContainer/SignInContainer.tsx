import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import {
  checkLocalStorage,
  logout,
  signIn,
} from "../../redux/action-creators/user";
import { SignIn } from "./SignIn";
import { SignInMobile } from "./SignInMobile";

export const SignInContainer: FC = () => {
  const { isError, isAuth } = useTypedSelector((state) => state.user);
  const { config } = useTypedSelector((state => state.appearanceMode));
  const [routes, width, notification, dispatch] = [
    useRoutes(),
    useWindowDimensions().width,
    useNotification(config),
    useDispatch(),
  ];
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (event: any, type: "phoneNumber" | "password") =>
    type === "phoneNumber"
      ? setPhoneNumber(event.target.value)
      : setPassword(event.target.value);

  const handleSubmit = () => {
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("password", password);
    dispatch(signIn());
  };

  useEffect(() => {
    dispatch(checkLocalStorage());
  }, []);

  if (isAuth) {
    return <Redirect to={routes.home()} />;
  }

  if (isError[0]) {
    notification.cancel().error(isError[1]);
    dispatch(logout());
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
