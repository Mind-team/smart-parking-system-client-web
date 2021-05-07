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

export const Navbar: React.FC = () => {
  const modeConfig = useMode()[2];
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
          <NavLink to="/home" style={NavLinkStyles}>
            <NavbarElement>Главная</NavbarElement>
          </NavLink>
          <NavLink to="/history" style={NavLinkStyles}>
            <NavbarElement>История</NavbarElement>
          </NavLink>
          <NavLink to="/parkings" style={NavLinkStyles}>
            <NavbarElement>Парковки</NavbarElement>
          </NavLink>
          <NavLink to="/profile" style={NavLinkStyles}>
            <NavbarElement>Профиль</NavbarElement>
          </NavLink>
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};
