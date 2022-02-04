import { Home } from "./Home.page";
import { FC, useEffect, useState } from "react";
import {
  GetDriverResponseDto,
  GetLastParkingProcessDto,
  useDriverApi,
  useParkingApi,
  isCorrectResponse,
} from "@ermolaev/mind-common";
import {
  ICompletedParkingProcess,
  IDriver,
  ModelToken,
  useModel,
} from "../../hooks/models";
import { IUncompletedParkingProcess } from "../../hooks/models/interfaces/uncompletedParkingProcess.interface";

const prepareParkingProcess = (
  parkingProcess: ICompletedParkingProcess | IUncompletedParkingProcess,
) => {
  if (parkingProcess.isCompleted) {
    return {
      parkingName: parkingProcess.parking.title,
      date: parkingProcess.entryCarTime,
      price: parkingProcess.payment.value,
    };
  }
  return {
    price: parkingProcess.payment.value as unknown as number,
  };
};

export const HomeContainer: FC = () => {
  const driverApi = useDriverApi(localStorage.getItem("at") as string);
  const parkingApi = useParkingApi(localStorage.getItem("at") as string);
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
          ...prepareParkingProcess(parkingProcess),
          detailsClick: () => console.log("1"),
        }}
        plate={plate}
      />
    );
  }

  return <>Loading</>;
};