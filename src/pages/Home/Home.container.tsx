import { Home } from "./Home.page";
import { FC, useEffect, useState } from "react";
import { IParkingWidgetData } from "@ermolaev/mind-ui";
import {
  GetDriverResponseDto,
  GetLastParkingProcessDto,
  useDriverApi,
  useParkingApi,
  useCache,
  isCorrectResponse,
} from "@ermolaev/mind-common";
import {
  ICompletedParkingProcess,
  IDriver,
  ModelToken,
  useModel,
} from "../../hooks/models";

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
  const driverApi = useDriverApi(localStorage.getItem("at") as string);
  const parkingApi = useParkingApi(localStorage.getItem("at") as string);
  const cache = useCache();
  const [parkingProcess, setParkingProcess] =
    useState<ICompletedParkingProcess>();
  const [plate, setPlate] = useState<string>("");
  const [isError, setError] = useState(false);

  useEffect(() => {
    Promise.all([driverApi.driver(), parkingApi.lastParkingProcess()]).then(
      ([driver, parkingProcess]) => {
        if (isCorrectResponse<GetLastParkingProcessDto>(parkingProcess)) {
          const parkingProcessModel = useModel<
            GetLastParkingProcessDto,
            ICompletedParkingProcess
          >(ModelToken.CompletedParkingProcess, parkingProcess);
          if (!parkingProcessModel) {
            setError(true);
            return;
          }
          setParkingProcess(parkingProcessModel);
        }
        if (isCorrectResponse(driver)) {
          const driverModel = useModel<GetDriverResponseDto, IDriver>(
            ModelToken.Driver,
            driver,
          );
          if (!driverModel) {
            setError(true);
            return;
          }
          setPlate(driverModel.carPlates[0]);
          cache.save("driver", driverModel);
        }
      },
    );
  }, []);

  if (isError) {
    return <>Error</>;
  }

  if (parkingProcess) {
    return (
      <Home
        parkingWidget={{
          ...parkingProcess,
          price: parkingProcess.payment.value,
          detailsClick: () => console.log("1"),
        }}
        plate={plate}
      />
    );
  }

  return <>Loading</>;
};
