import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SignInDto } from "../../common/SignInDto";
import { UserRecord } from "../../common/UserRecord.interface";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useMode } from "../../hooks/mode.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { Profile } from "./Profile";

export const ProfileContainer = () => {
  const [req, api, routes, modeConfig, width] = [
    useHttp(),
    useAPI(),
    useRoutes(),
    useMode()[2],
    useWindowDimensions().width,
  ];
  const [data, setData] = useState<UserRecord>();
  const [isLoading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("password");
    setAuth(false);
  };

  useEffect(() => {
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
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
        return;
      }
      setData(result.value);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <>Loading</>;
  }

  if (!isAuth) {
    return <Redirect to={routes.signIn()} />;
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
