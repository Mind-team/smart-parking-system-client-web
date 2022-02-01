import { isCorrectResponse, useDriverApi } from "@ermolaev/mind-common";
import { FC, useEffect, useState } from "react";
import {
  ICompletedParkingProcess,
  ModelToken,
  useModel,
} from "../../hooks/models";
import { IUncompletedParkingProcess } from "../../hooks/models/interfaces/uncompletedParkingProcess.interface";
import { History } from "./History.page";

// driverApi.driver().then((driver) => {
//   if (!isCorrectResponse(driver)) {
//     setError(true);
//     return;
//   }
//   const driverModel = useModel<GetDriverResponseDto, IDriver>(
//     ModelToken.Driver,
//     driver,
//   );
//   if (!driverModel) {
//     setError(false);
//   }
//   setDriver(driverModel);
// });

export const HistoryContainer: FC = () => {
  const driverApi = useDriverApi(localStorage.getItem("at") as string);
  const [pp, setPP] = useState<ICompletedParkingProcess[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    driverApi
      .parkingProcesses()
      .then((pp) => {
        if (!isCorrectResponse(pp)) {
          setError(true);
          return;
        }
        const ppModels = pp.map((pp) => {
          return useModel(ModelToken.CompletedParkingProcess, pp);
        });
        setPP(ppModels as ICompletedParkingProcess[]);
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <>Error</>;
  }

  if (pp) {
    return <History parkingProcesses={pp} />;
  }

  return <>Loading</>;
};
