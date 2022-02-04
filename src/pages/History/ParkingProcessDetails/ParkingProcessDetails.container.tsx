import { ParkingProcessDetails } from "./ParkingProcessDetails.page";
import {
  ICompletedParkingProcess,
  ModelToken,
  useModel,
} from "../../../hooks/models";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { isCorrectResponse, useParkingApi } from "@ermolaev/mind-common";

const prepareData = (parkingProcess: ICompletedParkingProcess) => {
  return {
    Паркинг: parkingProcess.parking.title,
    "Дата въезда": new Date(parkingProcess.entryCarTime).toLocaleDateString(),
    "Дата выезда": new Date(
      parkingProcess.departureCarTime,
    ).toLocaleDateString(),
    "Время въезда": new Date(parkingProcess.entryCarTime).toLocaleTimeString(),
    "Время выезда": new Date(
      parkingProcess.departureCarTime,
    ).toLocaleTimeString(),
    "Регистрационный знак транспорта": parkingProcess.driver.carPlate,
    Сумма: parkingProcess.payment.value + "",
  };
};

export interface IParkingProcessDetailsContainerProps {
  parkingProcess: ICompletedParkingProcess;
}

export const ParkingProcessDetailsContainer = () => {
  const parkingApi = useParkingApi("");
  const id = useParams().id;
  const [parkingProcess, setParkingProcess] =
    useState<ICompletedParkingProcess>();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      setError(true);
    }
    parkingApi.parkingProcess(id as string).then((response) => {
      if (!isCorrectResponse(response)) {
        setError(true);
        return;
      }
      const parkingProcess = useModel(
        ModelToken.CompletedParkingProcess,
        response,
      );
      setParkingProcess(parkingProcess as ICompletedParkingProcess);
    });
  });

  if (error) {
    return <>Что-то не так :(</>;
  }

  if (parkingProcess) {
    return (
      <ParkingProcessDetails
        data={prepareData(parkingProcess) as Record<string, string>}
      />
    );
  }

  return <>Загрузка</>;
};
