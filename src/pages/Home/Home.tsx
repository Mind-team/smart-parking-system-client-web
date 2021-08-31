/* eslint-disable indent */
// TODO: Fix
import { FC } from "react";
import { Parking } from "../../common/Parking.dto";
import { ParkingWidget } from "../../components/ParkingWidget/ParkingWidget";
import { useAPI } from "../../hooks/api.hook";
import { useDateFormatter } from "../../hooks/dateFormater.hook";
import {
  ContentWrapper,
  TopicBody,
  Line,
  LineNumber,
  LineContent,
  TopicTitle,
  TopicWrapper,
  Wrapper,
} from "./Home.styles";

interface Props {
  parking: Parking;
}

export const Home: FC<Props> = ({ parking }) => {
  const api = useAPI();

  return (
    <Wrapper>
      <ContentWrapper>
        <TopicWrapper>
          <TopicTitle>Правила паркинга</TopicTitle>
          <TopicBody>
            <Line>
              <LineNumber>1</LineNumber>
              <LineContent>
                Перед въездом проверьте, что задний регистрационный знак читаем
              </LineContent>
            </Line>
            <Line>
              <LineNumber>2</LineNumber>
              <LineContent>
                При въезде на парковку наша камера считает номер вашего
                транспортного средства, от вас никаких действий не требуется
              </LineContent>
            </Line>
            <Line>
              <LineNumber>3</LineNumber>
              <LineContent>
                При выезде камера считает номер транспортного средства и
                автоматически спишет с вашей карты нужную сумму, и откроет
                шлагбаум
              </LineContent>
            </Line>
          </TopicBody>
        </TopicWrapper>
        {parking.entryCarTime ? (
          <TopicWrapper>
            <TopicTitle>
              {parking.isCompleted ? "Последняя операция" : "Текущая парковка"}
            </TopicTitle>
            <ParkingWidget
              title={parking.parkingTitle}
              date={
                parking.isCompleted
                  ? useDateFormatter(new Date(parking.departureCarTime))
                      .fullDate
                  : `${Math.round(
                      (new Date(parking.departureCarTime).getTime() -
                        new Date(parking.entryCarTime).getTime()) /
                        60000,
                    )} мин.`
              }
              price={parking.priceRub}
              route={api.parkingDetails(parking.id)}
              isDetails={parking.isCompleted ? true : false}
            />
          </TopicWrapper>
        ) : (
          ""
        )}
      </ContentWrapper>
    </Wrapper>
  );
};
