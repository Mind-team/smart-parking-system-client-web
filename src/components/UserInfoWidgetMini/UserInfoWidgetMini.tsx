import * as S from "./UserInfoWidgetMini.styles";
import { FC } from "react";

export interface Props {
  leftSideText: string;
  rightSideText: string;
}

export const UserInfoWidgetMini: FC<Props> = ({
  leftSideText,
  rightSideText,
}) => {
  return (
    <S.Wrapper>
      <S.LeftSide>{leftSideText}</S.LeftSide>
      <S.RightSide>
        <S.RightSideInnerText>{rightSideText}</S.RightSideInnerText>
      </S.RightSide>
    </S.Wrapper>
  );
};
