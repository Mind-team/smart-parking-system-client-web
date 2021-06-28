import { FC, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { SignInDto } from "../../common/SignInDto";
import { UserRecord } from "../../common/UserRecord.interface";
import { useHttp } from "../../hooks/http.hook";
import { useMode } from "../../hooks/mode.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { ParkingDetails } from "../../components/ParkingDetails/ParkingDetails";
import { Wrapper } from "./ParkingDetails.styles";
import { useNotification } from "../../hooks/notification.hook";
import { Toaster } from "react-hot-toast";

export const ParkingDetailsContainer: FC = () => {
  const [req, routes, theme, notification] = [
    useHttp(),
    useRoutes(),
    useMode()[2],
    useNotification(),
  ];
  const { id } = useParams<{ id: string }>();
  const [parking, setParking] = useState<ParkingRecord>();
  const [isLoading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    notification.loading();
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
      notification.cancel().error("You are not auth");
      setAuth(false);
      return;
    }
    req<SignInDto, UserRecord>({
      url: "http://localhost:5000/user/signIn",
      method: "POST",
      body: {
        phoneNumber,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.isExpected) {
          notification.cancel().error(res.message);
          setError(true);
          return;
        }
        notification.cancel();
        setParking(res.value?.parkingHistory.filter((el) => el._id === id)[0]);
        setLoading(false);
      })
      .catch((err) => {
        notification.cancel().error("Something wrong with internet");
        setError(true);
      });
  }, []);

  if (!isAuth) {
    return <Redirect to={routes.signIn()} />;
  }

  if (isError) {
    return <Toaster />;
  }

  if (isLoading) {
    return <Toaster />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <ParkingDetails parking={parking as ParkingRecord} />
      </Wrapper>
    </ThemeProvider>
  );
};
