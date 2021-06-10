import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { ParkingWidget } from "../../components/ParkingWidget/ParkingWidget";
import { useDateFormater } from "../../hooks/dateFormater.hook";
import { useMode } from "../../hooks/mode.hook";
import { WidgetWrapper, Wrapper } from "../../styles/History.styles";

interface Props {
  parkings: ParkingRecord[];
}

export const History: FC<Props> = ({ parkings }) => {
  const modeConfig = useMode()[2];
  return (
    <ThemeProvider theme={modeConfig}>
      <Wrapper>
        {parkings.map((parking, index) => {
          return (
            <WidgetWrapper>
              <ParkingWidget
                parkingTitle={parking.parkingTitle}
                parkingDate={
                  useDateFormater(new Date(parking.entryCarTime)).fullDate
                }
                parkingPrice={parking.priceRub}
              />
            </WidgetWrapper>
          );
        })}
      </Wrapper>
    </ThemeProvider>
  );
};
