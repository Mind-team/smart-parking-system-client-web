import React from "react";
import {
  Content,
  NavbarElement,
  NavLinkStyles,
  Wrapper,
} from "./Navbar.styles";
import { MindLogo } from "../Icons/MindLogo";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useMode } from "../../hooks/mode.hook";
import { useRoutes } from "../../hooks/routes.hook";

export const Navbar: React.FC = () => {
  const modeConfig = useMode()[2];
  const routes = useRoutes();
  return (
    <ThemeProvider theme={modeConfig}>
      <Wrapper>
        <Content>
          <MindLogo
            color={modeConfig.textColor}
            width="30px"
            height="30px"
            strokeWidth={3}
          />
          <NavLink to={routes.home()} style={NavLinkStyles}>
            <NavbarElement>Главная</NavbarElement>
          </NavLink>
          <NavLink to={routes.history()} style={NavLinkStyles}>
            <NavbarElement>История</NavbarElement>
          </NavLink>
          <NavLink to={routes.parkings()} style={NavLinkStyles}>
            <NavbarElement>Парковки</NavbarElement>
          </NavLink>
          <NavLink to={routes.profile()} style={NavLinkStyles}>
            <NavbarElement>Профиль</NavbarElement>
          </NavLink>
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};
