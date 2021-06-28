import { FC, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SignInDto } from "../../common/SignInDto";
import { UserRecord } from "../../common/UserRecord.interface";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useMode } from "../../hooks/mode.hook";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { Profile } from "./Profile";

export const ProfileContainer: FC = () => {
  const [req, api, routes, modeConfig, width, notification] = [
    useHttp(),
    useAPI(),
    useRoutes(),
    useMode()[2],
    useWindowDimensions().width,
    useNotification(),
  ];
  const [data, setData] = useState<UserRecord>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isAuth, setAuth] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("password");
    setAuth(false);
  };

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
      url: api.signIn(),
      method: "POST",
      body: {
        phoneNumber,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      if (!result.isExpected) {
        notification.cancel().error(result.message);
        setError(true);
        return;
      }
      notification.cancel();
      setData(result.value);
      setLoading(false);
    }).catch((err) => {
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
    <ThemeProvider theme={modeConfig}>
      {width > 760 ? (
        <Profile user={data as UserRecord} handleLogout={handleLogout} />
      ) : (
        <Profile user={data as UserRecord} handleLogout={handleLogout} />
      )}
    </ThemeProvider>
  );
};
