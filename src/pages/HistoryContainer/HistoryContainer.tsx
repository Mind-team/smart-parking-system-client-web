import { FC, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { fetchUserData } from "../../store/action-creators/user";
import { useNotification } from "../../hooks/notification.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { History } from "./History";
import { Redirect } from "react-router-dom";
import { useRoutes } from "../../hooks/routes.hook";

export const HistoryContainer: FC = () => {
  const { user, isLoading, isError } = useTypedSelector((state) => state.user);
  const [width, notification, routes, dispatch] = [
    useWindowDimensions().width,
    useNotification(),
    useRoutes(),
    useDispatch(),
  ];

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  if (isLoading) {
    return <></>;
  }

  if (isError[0]) {
    if (isError[1] === "NotAuth") {
      notification.cancel().error("You are not auth");
      return <Redirect to={routes.signIn()} />;
    }
    notification.cancel().error(isError[1]);
    return <Toaster />;
  }

  return width > 760 ? (
    <History parkings={user?.parkingHistory as ParkingRecord[]} />
  ) : (
    <History parkings={user?.parkingHistory as ParkingRecord[]} />
  );
};
