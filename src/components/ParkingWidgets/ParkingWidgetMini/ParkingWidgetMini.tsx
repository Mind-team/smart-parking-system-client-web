import * as S from "./ParkingWidgetMini.styles";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavLinkStyles } from "../navLink.styles";
import { FilledWidget } from "../filledWidget.interface";

type UnfilledWidget = Pick<FilledWidget, "price" | "detailsRoute">;

export type FilledWidgetProps = {
  isFilled: true;
  data: FilledWidget;
};

export type UnfilledWidgetProps = {
  isFilled: false;
  data: UnfilledWidget;
};

export type Props = FilledWidgetProps | UnfilledWidgetProps;

export const ParkingWidgetMini: FC<Props> = ({ isFilled, data }) => {
  return (
    <S.Wrapper>
      {isFilled ? (
        <S.TitleWrapper>
          <span>{(data as FilledWidget).title}</span>
          <span>{(data as FilledWidget).parkingTime}</span>
          <span>{(data as FilledWidget).entryCarDate}</span>
        </S.TitleWrapper>
      ) : (
        <S.TitleWrapperUnfilled>
          <span>Вы сейчас на парковке</span>
        </S.TitleWrapperUnfilled>
      )}
      <S.Sum>{data.price}₽</S.Sum>
      <NavLink to={data.detailsRoute} style={NavLinkStyles}>
        <S.Details>Подробнее</S.Details>
      </NavLink>
    </S.Wrapper>
  );
};
