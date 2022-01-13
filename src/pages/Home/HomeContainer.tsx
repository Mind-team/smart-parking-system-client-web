import { FC, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Redirect } from "react-router";
import { ThemeProvider } from "styled-components";
import { useApi } from "../../hooks/network";
import { useNotification } from "../../hooks/notification.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { Home } from "./Home";
import { useActions } from "../../hooks/reduxActions.hook";
import { GetLastParkingProcessResponseDto } from "../../dto/parking-process/get-last-parking-process-response.dto";

export const HomeContainer: FC = () => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  const api = useApi();
  const routes = useRoutes();
  const [lastParking, setLastParking] =
    useState<GetLastParkingProcessResponseDto>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
    let cleanupFunction = false;
    const jwtToken = localStorage.getItem("JwtToken");
    if (!jwtToken) {
      setAuth(false);
      setLoading(false);
      return;
    }
    api
      .getLastParkingProcess(jwtToken)
      .then((parkingProcess) => setLastParking(parkingProcess));
    return () => {
      cleanupFunction = true;
    };
  }, []);

  return (
    <ThemeProvider theme={config}>
      <Home parkingProcess={lastParking as GetLastParkingProcessResponseDto} />
    </ThemeProvider>
  );
};
