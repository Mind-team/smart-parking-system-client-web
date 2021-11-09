import { FC, useContext } from "react";
import {
  Content,
  NavbarElement,
  NavLinkStyles,
  Wrapper,
} from "./Navbar.styles";
import { MindLogo } from "../../Icons/MindLogo";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useRoutes } from "../../../hooks/routes.hook";
import { useTypedSelector } from "../../../hooks/typedSelector.hook";
import { LangContext } from "../../../context/lang.context";

export const Navbar: FC = () => {
  const lang = useContext(LangContext);
  const { config } = useTypedSelector((state) => state.appearanceMode);
  const routes = useRoutes();
  return (
    <ThemeProvider theme={config}>
      <Wrapper>
        <Content>
          <MindLogo
            color={config.textColor}
            width="30px"
            height="30px"
            strokeWidth={3}
          />
          <NavLink to={routes.home()} style={NavLinkStyles}>
            <NavbarElement>{lang.home(true)}</NavbarElement>
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
