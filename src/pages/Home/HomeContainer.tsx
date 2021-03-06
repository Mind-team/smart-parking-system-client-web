import { FC, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Redirect } from "react-router";
import { ThemeProvider } from "styled-components";
import { Parking } from "../../common/Parking.dto";
import { SignInDto } from "../../common/SignIn.dto";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { Home } from "./Home";
import { useActions } from "../../hooks/reduxActions.hook";

export const HomeContainer: FC = () => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  const { fetchUserData } = useActions();
  const [req, api, routes, notification] = [
    useHttp(),
    useAPI(),
    useRoutes(),
    useNotification(config),
  ];
  const [lastParking, setLastParking] = useState<Parking>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
    let cleanupFunction = false;
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
      notification.cancel().error("You are not auth");
      setAuth(false);
      setLoading(false);
      return;
    }
    req<SignInDto, Parking>({
      url: api.lastParkingHistoryElement(),
      method: "POST",
      body: {
        phoneNumber,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (!result.isExpected) {
          notification.cancel().error(result.message);
          setError(true);
          return;
        }
        if (!cleanupFunction) {
          notification.cancel();
          setLastParking(result.value);
          setLoading(false);
        }
      })
      .catch(() => {
        notification.cancel().error("Something wrong with internet");
        setError(true);
      });
    fetchUserData();
    return () => {
      cleanupFunction = true;
    };
  }, []);

  if (error) {
    return <Toaster />;
  }

  if (loading) {
    return (
      <div
        style={{
          backgroundColor: config.additionalBGColor,
          height: "100%",
        }}
      />
    );
  }

  if (!isAuth) {
    return <Redirect to={routes.signIn()} />;
  }

  return (
    <ThemeProvider theme={config}>
      <Home parking={lastParking as Parking} />
    </ThemeProvider>
  );
};
