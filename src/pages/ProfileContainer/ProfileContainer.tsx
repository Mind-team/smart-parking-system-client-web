import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserRecord } from "../../common/UserRecord.interface";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useMode } from "../../hooks/mode.hook";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { fetchUserData, logout } from "../../store/action-creators/user";
import { Profile } from "./Profile";

export const ProfileContainer: FC = () => {
  const { user, isLoading, isError } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isAuth, setAuth] = useState(true);
  const [routes, modeConfig, width, notification] = [
    useRoutes(),
    useMode()[2],
    useWindowDimensions().width,
    useNotification(),
  ];

  const handleLogout = () => {
    dispatch(logout());
    setAuth(false);
  };
  
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  if (!isAuth) {
    return <Redirect to={routes.signIn()} />;
  }

  if (isError[0]) {
    notification.cancel().error(isError[1] as string);
    return <Redirect to={routes.signIn()} />;
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <ThemeProvider theme={modeConfig}>
      {width > 760 ? (
        <Profile user={user as UserRecord} handleLogout={handleLogout} />
      ) : (
        <Profile user={user as UserRecord} handleLogout={handleLogout} />
      )}
    </ThemeProvider>
  );
};
