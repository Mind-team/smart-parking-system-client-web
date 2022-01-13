/* eslint-disable indent */
// TODO: Fix
import { FC } from "react";
import * as S from "./Home.styles";
import { RulesBlock } from "../../components/RulesBlock";
import { ParkingWidgetMini } from "../../components/ParkingWidgets";
import { UserInfoWidgetMini } from "../../components/UserInfoWidgetMini";
import { GetLastParkingProcessResponseDto } from "../../dto/parking-process/get-last-parking-process-response.dto";
import { useDateFormatter } from "../../hooks/dateFormater.hook";

interface Props {
  parkingProcess: GetLastParkingProcessResponseDto;
}

const prepareParkingProcessToWidget = (
  pp: GetLastParkingProcessResponseDto,
) => {
  return {
    title: pp.parking?.title ?? null,
    parkingTime: "5min",
    entryCarDate: useDateFormatter(new Date(pp.entryCarTime)).fullDate,
    price: pp.payment?.value ?? null,
    detailsRoute: pp._id ?? null,
  };
};

export const Home: FC<Props> = ({ parkingProcess }) => {
  if (!parkingProcess) {
    return <span>Loading</span>;
  }

  return (
    <S.Wrapper>
      <RulesBlock />
      <S.DownWrapper>
        <ParkingWidgetMini
          isFilled={parkingProcess.isCompleted}
          data={prepareParkingProcessToWidget(parkingProcess)}
        />
        <S.DownAgainWrapper>
          <UserInfoWidgetMini leftSideText="Ваша карта:" rightSideText="8840" />
          <UserInfoWidgetMini
            leftSideText="Ваш номер:"
            rightSideText={parkingProcess.driver?.carPlate ?? "kek"}
          />
        </S.DownAgainWrapper>
      </S.DownWrapper>
    </S.Wrapper>
  );
};
