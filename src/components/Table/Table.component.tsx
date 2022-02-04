import { FC } from "react";
import * as S from "./Table.styles";

export interface ITable {
  data: Record<string, string>;
}

export const Table: FC<ITable> = ({ data }) => {
  const d = Object.entries(data);

  if (d.length > 0) {
    return (
      <S.Wrapper>
        <S.Content>
          {d.map(([key, value], idx) => (
            <S.Line key={idx}>
              {key}: {value}
            </S.Line>
          ))}
        </S.Content>
      </S.Wrapper>
    );
  }

  return <div>Пусто</div>;
};
