import * as S from "./RulesBlock.styles";

export const RulesBlock = () => {
  return (
    <S.Wrapper>
      <S.RulesWrapper>
        <S.LineWrapper>
          <S.LineNumber>1</S.LineNumber>
          <S.LineDescription>
            Перед въездом проверьте, что задний регистрационный знак читаем
          </S.LineDescription>
        </S.LineWrapper>
        <S.LineWrapper>
          <S.LineNumber>2</S.LineNumber>
          <S.LineDescription>
            При въезде на парковку наша камера считает номер вашего
            транспортного средства, от вас никаких действий не требуется
          </S.LineDescription>
        </S.LineWrapper>
        <S.LineWrapper>
          <S.LineNumber>3</S.LineNumber>
          <S.LineDescription>
            При выезде камера считает номер транспортного средства и
            автоматически спишет с вашей карты нужную сумму, и откроет шлагбаум
          </S.LineDescription>
        </S.LineWrapper>
      </S.RulesWrapper>
    </S.Wrapper>
  );
};
