import { FC, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Redirect } from "react-router";
import { ThemeProvider } from "styled-components";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { SignInDto } from "../../common/SignInDto";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useMode } from "../../hooks/mode.hook";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { Home } from "./Home";

export const HomeContainer: FC = () => {
  const [req, api, routes, notification, modeConfig] = [
    useHttp(),
    useAPI(),
    useRoutes(),
    useNotification(),
    useMode()[2],
  ];
  const [lastParking, setLastParking] = useState<ParkingRecord>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
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
    req<SignInDto, ParkingRecord>({
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
        notification.cancel();
        setLastParking(result.value);
        setLoading(false);
      })
      .catch(() => {
        notification.cancel().error("Something wrong with internet");
        setError(true);
      });
  }, []);

  if (error) {
    return <Toaster />;
  }

  if (loading) {
    return (
      <div
        style={{
          backgroundColor: modeConfig.additionalBGColor,
          height: "100%",
        }}
      ></div>
    );
  }

  if (!isAuth) {
    return <Redirect to={routes.signIn()} />;
  }

  return (
    <ThemeProvider theme={modeConfig}>
      <Home parking={lastParking as ParkingRecord} />
    </ThemeProvider>
  );
};
