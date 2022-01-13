import { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { History } from "./History";
import { ThemeProvider } from "styled-components";
import { useApi } from "../../hooks/network";

export const HistoryContainer: FC = () => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  const api = useApi();
  const [pps, setPPS] = useState([]);

  useEffect(() => {
    api
      .getParkingProcesses(
        localStorage.getItem("JwtToken") as string,
        "84c312f4-9450-4867-8962-6804420a9ed1",
      )
      .then((parkingProcesses) => setPPS(parkingProcesses));
  }, []);

  return (
    <ThemeProvider theme={config}>
      <History parkings={pps} />
    </ThemeProvider>
  );
};
