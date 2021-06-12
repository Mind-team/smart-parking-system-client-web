import { FC } from "react";
import { NavLink } from "react-router-dom";
import { WidgetWrapper, Details, InfoLine, Price, NavLinkStyles } from "./ParkingWidget.styles";

interface Props {
  parkingTitle: string;
  parkingDate: string;
  parkingPrice: number;
  route: string;
}

export const ParkingWidget: FC<Props> = ({
  parkingTitle,
  parkingDate,
  parkingPrice,
  route,
}) => {
  return (
    <WidgetWrapper>
      <InfoLine>
        <div>{parkingTitle}</div>
        <div>{parkingDate}</div>
      </InfoLine>
      <Price>{parkingPrice}₽</Price>
      <NavLink to={route} style={NavLinkStyles}>
        <Details>Подробнее</Details>
      </NavLink>
    </WidgetWrapper>
  );
};