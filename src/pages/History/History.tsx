import { FC } from "react";
import { Parking } from "../../common/Parking.dto";
import { ParkingWidget } from "../../components/ParkingWidget/ParkingWidget";
import { useAPI } from "../../hooks/api.hook";
import { useDateFormatter } from "../../hooks/dateFormater.hook";
import { WidgetWrapper, Wrapper } from "./History.styles";

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
            <ParkingWidget
              title={parking.parkingTitle}
              date={useDateFormatter(new Date(parking.entryCarTime)).fullDate}
              price={parking.priceRub}
              route={api.parkingDetails(index.toString())}
            />
          </WidgetWrapper>
        );
      })}
    </Wrapper>
  );
};
