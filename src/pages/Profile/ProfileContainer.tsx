import { FC, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { Profile } from "./Profile";
import { useActions } from "../../hooks/reduxActions.hook";
import { GetDriverDataResponseDto } from "../../dto/driver/get-driver-data-response.dto";
import { useApi } from "../../hooks/network";

export const ProfileContainer: FC = () => {
  const { isLoading, isError, isAuth } = useTypedSelector(
    (state) => state.user,
  );
  const [user, setUser] = useState();
  const api = useApi();
  const { config } = useTypedSelector((state) => state.appearanceMode);
  const { logout, fetchUserData, toggleMode } = useActions();
  const [routes, width, notification] = [
    useRoutes(),
    useWindowDimensions().width,
    useNotification(config),
  ];

  const handleLogout = () => logout();

  useEffect(() => {
    const jwtToken = localStorage.getItem("JwtToken");
    api.getDriverData(jwtToken as string).then((user) => setUser(user));
  }, []);

  if (isLoading) {
    return <></>;
  }

  if (!user) {
    return <></>;
  }

  return (
    <ThemeProvider theme={config}>
      {width > 760 ? (
        <Profile
          user={user as GetDriverDataResponseDto}
          handleLogout={handleLogout}
          changeMode={() => toggleMode()}
        />
      ) : (
        <Profile
          user={user as GetDriverDataResponseDto}
          handleLogout={handleLogout}
          changeMode={() => toggleMode()}
        />
      )}
    </ThemeProvider>
  );
};
