import * as S from "./ParkingProcessDetails.styles";
import { Table } from "../../../components";
import { FC } from "react";

export interface IParkingProcessDetails {
  data: Record<string, string>;
}

export const ParkingProcessDetails: FC<IParkingProcessDetails> = ({ data }) => {
  return (
    <S.Wrapper>
      <Table data={data} />
    </S.Wrapper>
  );
};
