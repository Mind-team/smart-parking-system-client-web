import React from "react";
import { WidgetWrapper, Cheque, InfoLine, Price } from "./ParkingWidget.styles";

interface Props {
  parkingTitle: string;
  parkingDate: string;
  parkingPrice: number;
}

export const ParkingWidget: React.FC<Props> = ({
  parkingTitle,
  parkingDate,
  parkingPrice,
}) => {
  return (
    <WidgetWrapper>
      <InfoLine>
        <div>{parkingTitle}</div>
        <div>{parkingDate}</div>
      </InfoLine>
      <Price>{parkingPrice}₽</Price>
      <Cheque>Посмотреть чек</Cheque>
    </WidgetWrapper>
  );
};