import { FC } from "react";
import { useDateFormatter } from "../../../hooks/dateFormater.hook";
import { Content, Line, Wrapper } from "./ParkingDetails.styles";
import { GetLastParkingProcessResponseDto } from "../../../dto/parking-process/get-last-parking-process-response.dto";

export const ParkingDetails: FC<{
  parking: GetLastParkingProcessResponseDto | null;
}> = ({ parking }) => {
  if (!parking) {
    return <span>Something went wrong, sorry :(</span>;
  }

  const entryData = useDateFormatter(new Date(parking.entryCarTime));
  const departureData = useDateFormatter(new Date(parking.departureCarTime));

  return (
    <Wrapper>
      <Content>
        <Line>Паркинг: {parking.parking.title}</Line>
        <Line>Дата въезда: {entryData.fullDate}</Line>
        <Line>Дата выезда: {departureData.fullDate}</Line>
        <Line>Время въезда: {entryData.fullTime}</Line>
        <Line>Время выезда: {departureData.fullTime}</Line>
        <Line>Регистрационный знак транспорта: {parking.driver.carPlate}</Line>
        <Line>Сумма: {Math.trunc(parking.payment.value)}₽</Line>
      </Content>
    </Wrapper>
  );
};
