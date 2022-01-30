import { Home } from "./Home.page";
import { useDriverApi } from "../../hooks/api";
import { FC, useEffect, useState } from "react";
import { useParkingApi } from "../../hooks/api/parking/parking-api.hook";
import { GetLastParkingProcessDto } from "../../hooks/api/parking/dto/get-last-parking-process.dto";
import { IParkingWidgetData } from "@ermolaev/mind-ui";

const prepareToParkingWidget = (
  data: GetLastParkingProcessDto,
): IParkingWidgetData | Pick<IParkingWidgetData, "price" | "detailsClick"> => {
  if (data.isCompleted) {
    return {
      parkingName: data.parking.title,
      date: data.entryCarTime,
      price: Math.trunc(data.payment.value),
      detailsClick: () => {
        return;
      },
    };
  }
  return {
    price: Math.trunc(data.payment.value),
    detailsClick: () => {
      return;
    },
  };
};

export const HomeContainer: FC = () => {
  const driverApi = useDriverApi();
  const parkingApi = useParkingApi();
  const [parkingProcess, setParkingProcess] =
    useState<GetLastParkingProcessDto | null>();

  useEffect(() => {
    Promise.all([driverApi.driver(), parkingApi.lastParkingProcess()]).then(
      (value) => {
        setParkingProcess(value[1]);
      },
    );
  }, []);

  if (parkingProcess) {
    return <Home parkingWidget={prepareToParkingWidget(parkingProcess)} />;
  }

  return <></>;
};
