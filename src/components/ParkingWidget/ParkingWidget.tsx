import { FC } from "react";
import { NavLink } from "react-router-dom";
import { WidgetWrapper, Details, InfoLine, Price, NavLinkStyles } from "./ParkingWidget.styles";

interface Props {
  title: string;
  date: string;
  price: number;
  route: string;
}

export const ParkingWidget: FC<Props> = ({
  title,
  date,
  price,
  route,
}) => {
  return (
    <WidgetWrapper>
      <InfoLine>
        <div>{title}</div>
        <div>{date}</div>
      </InfoLine>
      <Price>{price}₽</Price>
      <NavLink to={route} style={NavLinkStyles}>
        <Details>Подробнее</Details>
      </NavLink>
    </WidgetWrapper>
  );
};