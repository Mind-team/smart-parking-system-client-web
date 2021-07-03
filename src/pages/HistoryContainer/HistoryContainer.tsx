import { FC, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { useNotification } from "../../hooks/notification.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { History } from "./History";
import { Redirect } from "react-router-dom";
import { useRoutes } from "../../hooks/routes.hook";
import { ThemeProvider } from "styled-components";
import { useActions } from "../../hooks/reduxActions.hook";

export const HistoryContainer: FC = () => {
  const { user, isLoading, isError } = useTypedSelector((state) => state.user);
  const { config } = useTypedSelector((state) => state.appearanceMode);
  const { fetchUserData } = useActions();
  const [notification, routes] = [useNotification(config), useRoutes()];

  useEffect(() => {
    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          backgroundColor: config.additionalBGColor,
          height: "100%",
        }}
      />
    );
  }

  if (isError[0]) {
    if (isError[1] === "NotAuth") {
      notification.cancel().error("You are not auth");
      return <Redirect to={routes.signIn()} />;
    }
    notification.cancel().error(isError[1]);
    return <Toaster />;
  }

  return (
    <ThemeProvider theme={config}>
      <History parkings={user?.parkingHistory as ParkingRecord[]} />
    </ThemeProvider>
  );
};
