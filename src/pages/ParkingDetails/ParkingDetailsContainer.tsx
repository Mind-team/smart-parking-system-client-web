import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ParkingDetails } from "../../components/old/ParkingDetails/ParkingDetails";
import { Wrapper } from "./ParkingDetails.styles";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { GetLastParkingProcessResponseDto } from "../../dto/parking-process/get-last-parking-process-response.dto";
import { useApi } from "../../hooks/network";

export const ParkingDetailsContainer: FC = () => {
  const { id } = useParams<{ id: string }>();
  const api = useApi();
  const [pp, setPP] = useState<GetLastParkingProcessResponseDto | null>(null);
  const { config } = useTypedSelector((state) => state.appearanceMode);

  useEffect(() => {
    api
      .getParkingProcessById(id)
      .then((parkingProcess: GetLastParkingProcessResponseDto) =>
        setPP(parkingProcess),
      );
  }, []);

  return (
    <ThemeProvider theme={config}>
      <Wrapper>
        <ParkingDetails parking={pp} />
      </Wrapper>
    </ThemeProvider>
  );
};
