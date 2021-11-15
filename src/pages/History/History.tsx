import { FC } from "react";
import { Parking } from "../../common/Parking.dto";
import { ParkingWidget } from "../../components/old/ParkingWidget/ParkingWidget";
import { useAPI } from "../../hooks/api.hook";
import { useDateFormatter } from "../../hooks/dateFormater.hook";
import { WidgetWrapper, Wrapper, SortBarWrapper } from "./History.styles";
import { ParkingWidgetStandard } from "../../components/ParkingWidgets";
import { ParkingsSortBar } from "../../components/ParkingsSortBar";

interface Props {
  parkings: Parking[];
}

export const History: FC<Props> = ({ parkings }) => {
  const api = useAPI();
  const plates = Array.from(new Set(parkings.map((value) => value.carPlate)));

  return (
    <Wrapper>
      <SortBarWrapper>
        <ParkingsSortBar plates={plates} />
      </SortBarWrapper>
      {parkings.map((parking, index) => {
        if (!parking.isCompleted) {
          return;
        }
        return (
          <WidgetWrapper key={index}>
            <ParkingWidgetStandard
              title={parking.parkingTitle}
              entryCarDate={
                useDateFormatter(new Date(parking.entryCarTime)).fullDate
              }
              price={parking.priceRub}
              detailsRoute={api.parkingDetails(index.toString())}
            />
          </WidgetWrapper>
        );
      })}
    </Wrapper>
  );
};
