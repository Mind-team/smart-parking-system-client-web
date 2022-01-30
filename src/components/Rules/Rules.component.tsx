import * as S from "./Rules.styles";
import { FC, useContext } from "react";
import { LanguageContext } from "../../context/languages";

export const Rules: FC = () => {
  const dict = useContext(LanguageContext);

  return (
    <S.Wrapper>
      <S.RulesWrapper>
        <S.LineWrapper>
          <S.LineNumber>1</S.LineNumber>
          <S.LineDescription>{dict.pages.home.rules.first}</S.LineDescription>
        </S.LineWrapper>
        <S.LineWrapper>
          <S.LineNumber>2</S.LineNumber>
          <S.LineDescription>{dict.pages.home.rules.second}</S.LineDescription>
        </S.LineWrapper>
        <S.LineWrapper>
          <S.LineNumber>3</S.LineNumber>
          <S.LineDescription>{dict.pages.home.rules.third}</S.LineDescription>
        </S.LineWrapper>
      </S.RulesWrapper>
    </S.Wrapper>
  );
};
