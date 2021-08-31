import { FC } from "react";
import { Parking } from "../../common/Parking.dto";
import { useDateFormatter } from "../../hooks/dateFormater.hook";
import { Content, Line, Wrapper } from "./ParkingDetails.styles";

export const ParkingDetails: FC<{ parking: Parking }> = ({ parking }) => {
  const entryData = useDateFormatter(new Date(parking.entryCarTime));
  const departureData = useDateFormatter(new Date(parking.departureCarTime));

  return (
    <Wrapper>
      <Content>
        <Line>Паркинг: {parking.parkingTitle}</Line>
        <Line>Дата въезда: {entryData.fullDate}</Line>
        <Line>Дата выезда: {departureData.fullDate}</Line>
        <Line>Время въезда: {entryData.fullTime}</Line>
        <Line>Время выезда: {departureData.fullTime}</Line>
        <Line>Регистрационный знак транспорта: {parking.carPlate}</Line>
        <Line>Сумма: {parking.priceRub}₽</Line>
      </Content>
    </Wrapper>
  );
};
