import { FC } from "react";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { useDateFormater } from "../../hooks/dateFormater.hook";
import { Content, Line, Wrapper } from "./ParkingDetails.styles";

export const ParkingDetails: FC<{ parking: ParkingRecord }> = ({ parking }) => {
  return (
    <Wrapper>
      <Content>
        <Line>Паркинг: {parking.parkingTitle}</Line>
        <Line>
          Дата въезда:
          {useDateFormater(new Date(parking.entryCarTime)).fullDate}
        </Line>
        <Line>
          Дата выезда:
          {useDateFormater(new Date(parking.departureCarTime)).fullDate}
        </Line>
        <Line>Время въезда: </Line>
        <Line>Время выезда: </Line>
        <Line>Регистрационный знак транспорта: {parking.carPlate}</Line>
        <Line>Время на паркинге: {parking.parkingTimeMin}</Line>
        <Line>Сумма: {parking.priceRub}</Line>
      </Content>
    </Wrapper>
  );
};
