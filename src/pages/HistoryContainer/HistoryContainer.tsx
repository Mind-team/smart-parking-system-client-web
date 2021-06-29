import { FC, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { fetchUserData } from "../../store/action-creators/user";
import { useNotification } from "../../hooks/notification.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { History } from "./History";

export const HistoryContainer: FC = () => {
  const { user, isLoading, isError } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  const [width, notification] = [
    useWindowDimensions().width,
    useNotification(),
  ];
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  if (isLoading) {
    //notification.cancel().loading();
    return <></>;
  }

  if (isError[0]) {
    notification.cancel().error(isError[1]);
    return <Toaster />;
  }

  return width > 760 ? (
    <History parkings={user?.parkingHistory as ParkingRecord[]} />
  ) : (
    <History parkings={user?.parkingHistory as ParkingRecord[]} />
  );
};
