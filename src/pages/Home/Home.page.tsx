import { Rules } from "../../components";
import * as S from "./Home.styles";
import { FC } from "react";
import { IParkingWidgetData, ParkingWidget } from "@ermolaev/mind-ui";

export interface IHomeProps {
  parkingWidget:
    | IParkingWidgetData
    | Pick<IParkingWidgetData, "price" | "detailsClick">;
}

export const Home: FC<IHomeProps> = ({ parkingWidget }) => {
  return (
    <S.Wrapper>
      <S.RulesWrapper>
        <Rules />
        <S.WidgetsWrapper>
          <ParkingWidget size="mini" data={parkingWidget} />
          <ParkingWidget size="mini" data={parkingWidget} />
        </S.WidgetsWrapper>
      </S.RulesWrapper>
    </S.Wrapper>
  );
};
