import { Navbar2 } from "../components";
import * as S from "./Main.styles";
import { Outlet } from "react-router-dom";
import { FC } from "react";

export const MainLayout: FC = () => {
  return (
    <S.MainWrapper>
      <Navbar2 />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.MainWrapper>
  );
};
