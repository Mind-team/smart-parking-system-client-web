import * as S from "./ParkingsSortBar.styles";
import { FC } from "react";

export interface Props {
  plates: string[];
}

export const ParkingsSortBar: FC<Props> = ({ plates }) => {
  return (
    <S.Wrapper>
      <S.Text>Время</S.Text>
      <S.Text>Стоимость</S.Text>
      {plates.map((value, index) => (
        <S.Text key={index}>{value}</S.Text>
      ))}
    </S.Wrapper>
  );
};
