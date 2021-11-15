import { FC } from "react";
import { Parking } from "../../common/Parking.dto";
import { ParkingWidget } from "../../components/old/ParkingWidget/ParkingWidget";
import { useAPI } from "../../hooks/api.hook";
import { useDateFormatter } from "../../hooks/dateFormater.hook";
import { WidgetWrapper, Wrapper } from "./History.styles";
import { ParkingWidgetStandard } from "../../components/ParkingWidgets";

interface Props {
  parkings: Parking[];
}

export const History: FC<Props> = ({ parkings }) => {
  const api = useAPI();

  return (
    <Wrapper>
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
