import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  WidgetWrapper,
  Details,
  InfoLine,
  Price,
  NavLinkStyles,
} from "./ParkingWidget.styles";

interface Props {
  title: string;
  date: string;
  price: number;
  route: string;
  isDetails?: boolean;
}

export const ParkingWidget: FC<Props> = ({
  title,
  date,
  price,
  route,
  isDetails = true,
}) => {
  return (
    <WidgetWrapper>
      <InfoLine>
        <div>{title}</div>
        <div>{date}</div>
      </InfoLine>
      <Price>{price}₽</Price>
      {isDetails ? (
        <NavLink to={route} style={NavLinkStyles}>
          <Details>Подробнее</Details>
        </NavLink>
      ) : (
        <div></div>
      )}
    </WidgetWrapper>
  );
};
