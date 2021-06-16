import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { ParkingWidget } from "../../components/ParkingWidget/ParkingWidget";
import { useAPI } from "../../hooks/api.hook";
import { useDateFormater } from "../../hooks/dateFormater.hook";
import { useMode } from "../../hooks/mode.hook";
import {
  ContentWrapper,
  TopicBody,
  Line,
  LineNumber,
  LineContent,
  TopicTitle,
  TopicWrapper,
  Wrapper,
} from "../../styles/Home.styles";

interface Props {
  parking: ParkingRecord;
}

export const Home: FC<Props> = ({ parking }) => {
  const modeConfig = useMode()[2];
  const api = useAPI();

  return (
    <ThemeProvider theme={modeConfig}>
      <Wrapper>
        <ContentWrapper>
          <TopicWrapper>
            <TopicTitle>Правила паркинга</TopicTitle>
            <TopicBody>
              <Line>
                <LineNumber>1</LineNumber>
                <LineContent>
                  Перед въездом проверьте, что задний регистрационный знак
                  читаем
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
                {parking.isCompleted
                  ? "Последняя операция"
                  : "Текущая парковка"}
              </TopicTitle>
              <ParkingWidget
                title={parking.parkingTitle}
                date={
                  parking.isCompleted
                    ? useDateFormater(new Date(parking.departureCarTime))
                      .fullDate
                    : `${Math.round(parking.parkingTimeMin)} мин.`
                }
                price={parking.priceRub}
                route={api.parkingDetails(parking._id)}
              />
            </TopicWrapper>
          ) : (
            ""
          )}
        </ContentWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};
