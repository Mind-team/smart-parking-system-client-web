import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ParkingRecord } from "../../common/ParkingRecord.interface";
import { useDateFormater } from "../../hooks/dateFormater.hook";
import { useMode } from "../../hooks/mode.hook";
import {
  Cheque,
  ContentWrapper,
  InfoLine,
  InfoLineContent,
  Line,
  LineContent,
  LineNumber,
  Price,
  TopicBody,
  TopicTitle,
  TopicWrapper,
  PriceLine,
  Wrapper,
} from "../../styles/Home.styles";

interface Props {
  parking: ParkingRecord;
}

export const Home: FC<Props> = ({ parking }) => {
  const modeConfig = useMode()[2];

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
            <TopicTitle>Последняя операция</TopicTitle>
            <TopicBody>
              <InfoLine>
                <InfoLineContent>{parking.parkingTitle}</InfoLineContent>
                <InfoLineContent>
                  {useDateFormater(new Date(parking.entryCarTime)).fullDate}
                </InfoLineContent>
              </InfoLine>
              <PriceLine>
                <Price>-{parking.priceRub} ₽</Price>
                <Cheque>Посмотреть чек</Cheque>
              </PriceLine>
            </TopicBody>
          </TopicWrapper>
        </ContentWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};
