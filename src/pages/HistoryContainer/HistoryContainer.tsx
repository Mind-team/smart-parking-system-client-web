import { FC, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { fetchUserData } from "../../store/action-creators/user";
import { useNotification } from "../../hooks/notification.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { History } from "./History";
import { Redirect } from "react-router-dom";
import { useRoutes } from "../../hooks/routes.hook";
import { ThemeProvider } from "styled-components";
import { useMode } from "../../hooks/mode.hook";

export const HistoryContainer: FC = () => {
  const { user, isLoading, isError } = useTypedSelector((state) => state.user);
  const [notification, routes, dispatch, modeConfig] = [
    useNotification(useMode()[2]),
    useRoutes(),
    useDispatch(),
    useMode()[2],
  ];

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          backgroundColor: modeConfig.additionalBGColor,
          height: "100%",
        }}
      ></div>
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
    <ThemeProvider theme={modeConfig}>
      <History parkings={user?.parkingHistory as ParkingRecord[]} />
    </ThemeProvider>
  );
};
