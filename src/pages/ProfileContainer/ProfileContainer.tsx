import { FC, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserRecord } from "../../common/UserRecord.interface";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { Profile } from "./Profile";
import { useActions } from "../../hooks/reduxActions.hook";

export const ProfileContainer: FC = () => {
  const { user, isLoading, isError, isAuth } = useTypedSelector(
    (state) => state.user
  );
  const { config } = useTypedSelector((state) => state.appearanceMode);
  const { logout, fetchUserData, toggleMode } = useActions();
  const [routes, width, notification] = [
    useRoutes(),
    useWindowDimensions().width,
    useNotification(config),
  ];

  const handleLogout = () => logout();

  useEffect(() => {
    if (!user) {
      fetchUserData();
    }
  }, []);

  if (isLoading) {
    return <></>;
  }

  if (!isAuth) {
    return <Redirect to={routes.signIn()} />;
  }

  if (isError[0]) {
    notification.cancel().error(isError[1] as string);
    return <Redirect to={routes.signIn()} />;
  }

  return (
    <ThemeProvider theme={config}>
      {width > 760 ? (
        <Profile
          user={user as UserRecord}
          handleLogout={handleLogout}
          changeMode={() => toggleMode()}
        />
      ) : (
        <Profile
          user={user as UserRecord}
          handleLogout={handleLogout}
          changeMode={() => toggleMode()}
        />
      )}
    </ThemeProvider>
  );
};
