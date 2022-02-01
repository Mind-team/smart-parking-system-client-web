import { ICompletedParkingProcess } from "../../hooks/models";
import { FC } from "react";
import { ParkingWidget } from "@ermolaev/mind-ui";

interface IHistoryProps {
  parkingProcesses: ICompletedParkingProcess[];
}

export const History: FC<IHistoryProps> = ({ parkingProcesses }) => {
  return (
    <div>
      {parkingProcesses.map((process, idx) => (
        <ParkingWidget
          key={idx}
          size="long"
          data={{
            date: process.entryCarTime,
            parkingName: process.parking.title,
            price: process.payment.value,
            detailsClick: () => {
              return;
            },
          }}
        />
      ))}
    </div>
  );
};
