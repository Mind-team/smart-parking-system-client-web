import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { ParkingWidget } from "../../components/ParkingWidget/ParkingWidget";
import { useDateFormater } from "../../hooks/dateFormater.hook";
import { useMode } from "../../hooks/mode.hook";
import { useRoutes } from "../../hooks/routes.hook";
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
  const routes = useRoutes();

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
          <TopicWrapper>
            <TopicTitle>
              {parking.isCompleted ? "Последняя операция" : "Текущая парковка"}
            </TopicTitle>
            <ParkingWidget
              parkingTitle={parking.parkingTitle}
              parkingDate={
                parking.isCompleted
                  ? useDateFormater(new Date(parking.departureCarTime)).fullDate
                  : `${Math.round(parking.parkingTimeMin)} минут`
              }
              parkingPrice={parking.priceRub}
              route={routes.parkingDetails(parking._id)}
            />
          </TopicWrapper>
        </ContentWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};
