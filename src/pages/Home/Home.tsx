/* eslint-disable indent */
// TODO: Fix
import { FC } from "react";
import { Parking } from "../../common/Parking.dto";
import { ParkingWidget } from "../../components/ParkingWidget/ParkingWidget";
import { useAPI } from "../../hooks/api.hook";
import { useDateFormatter } from "../../hooks/dateFormater.hook";
import * as S from "./Home.styles";
import { RulesBlock } from "../../components/RulesBlock";
import { ParkingWidgetMini } from "../../components/ParkingWidgetMini";
import { UserInfoWidgetMini } from "../../components/UserInfoWidgetMini";

interface Props {
  parking: Parking;
}

export const Home: FC<Props> = ({ parking }) => {
  const api = useAPI();

  return (
    <S.Wrapper>
      <RulesBlock />
      <S.DownWrapper>
        <ParkingWidgetMini
          isFilled={false}
          data={{ price: 500, detailsRoute: "" }}
        />
        <S.DownAgainWrapper>
          <UserInfoWidgetMini leftSideText="Ваша карта:" rightSideText="8840" />
          <UserInfoWidgetMini
            leftSideText="Ваш номер:"
            rightSideText="к510ат"
          />
        </S.DownAgainWrapper>
      </S.DownWrapper>
    </S.Wrapper>
  );
};
