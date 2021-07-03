import { FC } from "react";
import { Redirect, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { useRoutes } from "../../hooks/routes.hook";
import { ParkingDetails } from "../../components/ParkingDetails/ParkingDetails";
import { Wrapper } from "./ParkingDetails.styles";
import { useNotification } from "../../hooks/notification.hook";
import { Toaster } from "react-hot-toast";
import { useTypedSelector } from "../../hooks/typedSelector.hook";

export const ParkingDetailsContainer: FC = () => {
  const { user, isAuth, isError } = useTypedSelector((state) => state.user);
  const { config } = useTypedSelector((state) => state.appearanceMode);
  const { id } = useParams<{ id: string }>();
  const [routes, notification] = [
    useRoutes(),
    useNotification(),
  ];

  if (!isAuth) {
    return <Redirect to={routes.signIn()} />;
  }

  if (isError[0]) {
    notification.cancel().error(isError[1]);
    return <Toaster />;
  }

  return (
    <ThemeProvider theme={config}>
      <Wrapper>
        <ParkingDetails
          parking={
            user?.parkingHistory.filter(
              (el) => el._id === id
            )[0] as ParkingRecord
          }
        />
      </Wrapper>
    </ThemeProvider>
  );
};
