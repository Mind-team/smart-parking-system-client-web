import { FC } from "react";
import { Parking } from "../../common/Parking.dto";
import { useDateFormater } from "../../hooks/dateFormater.hook";
import { Content, Line, Wrapper } from "./ParkingDetails.styles";

export const ParkingDetails: FC<{ parking: Parking }> = ({ parking }) => {
  const entryData = useDateFormater(new Date(parking.entryCarTime));
  const departureData = useDateFormater(new Date(parking.departureCarTime));

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
