import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { ParkingWidget } from "../../components/ParkingWidget/ParkingWidget";
import { useAPI } from "../../hooks/api.hook";
import { useDateFormater } from "../../hooks/dateFormater.hook";
import { useMode } from "../../hooks/mode.hook";
import { WidgetWrapper, Wrapper } from "../../styles/History.styles";

interface Props {
  parkings: ParkingRecord[];
}

export const History: FC<Props> = ({ parkings }) => {
  const modeConfig = useMode()[2];
  const api = useAPI();
  return (
    <ThemeProvider theme={modeConfig}>
      <Wrapper>
        {parkings.map((parking, index) => {
          if (!parking.isCompleted) {
            return;
          }
          return (
            <WidgetWrapper key={index}>
              <ParkingWidget
                title={parking.parkingTitle}
                date={
                  useDateFormater(new Date(parking.entryCarTime)).fullDate
                }
                price={parking.priceRub}
                route={api.parkingDetails(parking._id)}
              />
            </WidgetWrapper>
          );
        })}
      </Wrapper>
    </ThemeProvider>
  );
};
