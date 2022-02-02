import { ICompletedParkingProcess } from "../../hooks/models";
import { FC } from "react";
import * as S from "./History.styles";
import { ParkingWidget, Sortbar } from "@ermolaev/mind-ui";

interface IHistoryProps {
  parkingProcesses: ICompletedParkingProcess[];
}

export const History: FC<IHistoryProps> = ({ parkingProcesses }) => {
  return (
    <S.Wrapper>
      <S.SortBarWrapper>
        <Sortbar
          clickHandler={() => console.log("Click")}
          parameters={[
            "Время",
            "Стоимость",
            parkingProcesses[0].driver.carPlate,
          ]}
        />
      </S.SortBarWrapper>
      {!parkingProcesses.length && <div>Нет</div>}
      {parkingProcesses.length > 0 &&
        parkingProcesses.map((process, idx) => (
          <S.WidgetWrapper key={idx}>
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
          </S.WidgetWrapper>
        ))}
    </S.Wrapper>
  );
};
