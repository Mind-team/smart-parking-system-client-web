import * as S from "./ParkingWidgetStandard.styles";
import { FilledWidget } from "../filledWidget.interface";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavLinkStyles } from "../navLink.styles";

export type ParkingWidgetStandardProps = Omit<FilledWidget, "parkingTime">;

export const ParkingWidgetStandard = (props: ParkingWidgetStandardProps) => {
  const [isHover, setHover] = useState(false);
  return (
    <NavLink to={props.detailsRoute} style={NavLinkStyles}>
      <S.Wrapper
        onMouseEnter={() => setHover(!isHover)}
        onMouseLeave={() => setHover(!isHover)}
      >
        <S.Title>{props.title}</S.Title>
        <div>{isHover ? "Подробнее" : props.price + "₽"}</div>
        <S.Date>{props.entryCarDate}</S.Date>
      </S.Wrapper>
    </NavLink>
  );
};
