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
        "466e4a53-ff8a-4330-b0dc-dbeb4ac1dabc",
      )
      .then((parkingProcesses) => setPPS(parkingProcesses));
  }, []);

  return (
    <ThemeProvider theme={config}>
      <History parkings={pps} />
    </ThemeProvider>
  );
};
