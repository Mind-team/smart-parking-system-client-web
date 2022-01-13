import { FC } from "react";
import { useDateFormatter } from "../../hooks/dateFormater.hook";
import { WidgetWrapper, Wrapper, SortBarWrapper } from "./History.styles";
import { ParkingWidgetStandard } from "../../components/ParkingWidgets";
import { ParkingsSortBar } from "../../components/ParkingsSortBar";
import { useEndpoints } from "../../hooks/network/endpoints.hook";
import { GetLastParkingProcessResponseDto } from "../../dto/parking-process/get-last-parking-process-response.dto";
import { useRoutes } from "../../hooks/routes.hook";

interface Props {
  parkings: GetLastParkingProcessResponseDto[];
}

export const History: FC<Props> = ({ parkings }) => {
  const api = useEndpoints();
  const routes = useRoutes();
  const plates = Array.from(
    new Set(parkings.map((value) => value.driver.carPlate)),
  );

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
              title={parking.parking.title}
              entryCarDate={
                useDateFormatter(new Date(parking.entryCarTime)).fullDate
              }
              price={parking.payment.value ?? 512}
              detailsRoute={routes.parkingDetails(parking._id)}
            />
          </WidgetWrapper>
        );
      })}
    </Wrapper>
  );
};
