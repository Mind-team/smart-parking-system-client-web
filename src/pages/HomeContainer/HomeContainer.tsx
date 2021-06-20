import { FC, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Redirect } from "react-router";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { SignInDto } from "../../common/SignInDto";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { Home } from "./Home";

export const HomeContainer: FC = () => {
  const [req, api, width, routes, notification] = [
    useHttp(),
    useAPI(),
    useWindowDimensions().width,
    useRoutes(),
    useNotification(),
  ];
  const [lastParking, setLastParking] = useState<ParkingRecord>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
    notification.loading();
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
      .catch((error) => {
        notification.cancel().error("Something wrong with internet");
        setError(true);
      });
  }, []);

  if (error) {
    return <Toaster />;
  }

  if (loading) {
    return <Toaster />;
  }

  if (!isAuth) {
    return <Redirect to={routes.signIn()} />;
  }

  return width > 760 ? (
    <Home parking={lastParking as ParkingRecord} />
  ) : (
    <Home parking={lastParking as ParkingRecord} />
  );
};
