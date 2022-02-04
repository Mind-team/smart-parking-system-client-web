import { isCorrectResponse, useDriverApi } from "@ermolaev/mind-common";
import { FC, useEffect, useState } from "react";
import {
  ICompletedParkingProcess,
  ModelToken,
  useModel,
} from "../../hooks/models";
import { History } from "./History.page";
import { useNavigate } from "react-router-dom";

export const HistoryContainer: FC = () => {
  const driverApi = useDriverApi(localStorage.getItem("at") as string);
  const navigate = useNavigate();
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

  const onDetailsClick = (processId: string) => {
    navigate("./details/" + processId);
  };

  if (error) {
    return <>Error</>;
  }

  if (pp) {
    return <History parkingProcesses={pp} onDetailsClick={onDetailsClick} />;
  }

  return <>Loading</>;
};
