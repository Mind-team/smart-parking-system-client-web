import { Rules } from "../../components";
import * as S from "./Home.styles";
import { FC, useContext } from "react";
import {
  InfoWidget,
  IParkingWidgetData,
  ParkingWidget,
} from "@ermolaev/mind-ui";
import { LanguageContext } from "../../context/languages";

export interface IHomeProps {
  parkingWidget:
    | IParkingWidgetData
    | Pick<IParkingWidgetData, "price" | "detailsClick">;
  plate: string;
}

export const Home: FC<IHomeProps> = ({ parkingWidget, plate }) => {
  return (
    <S.Wrapper>
      <S.RulesWrapper>
        <Rules />
        <S.WidgetsWrapper>
          <ParkingWidget size="mini" data={parkingWidget} />
          <S.MiniWidgetsWrapper>
            <InfoWidget
              size="mini"
              data={{
                leftSideContent: "Ваша карта:",
                rightSideContent: ":(",
              }}
            />
            <InfoWidget
              size="mini"
              data={{
                leftSideContent: "Ваш номер:",
                rightSideContent: plate,
              }}
            />
          </S.MiniWidgetsWrapper>
        </S.WidgetsWrapper>
      </S.RulesWrapper>
    </S.Wrapper>
  );
};
