import React from "react";
import {
  Form,
  Logo,
  Wrapper,
  FormSubtitle,
  FormTitle,
  Inputs,
  AppearanceModeIcon,
} from "../../styles/SignInMobile.styles";
import logoLight from "../../img/mindLogoLight.svg";
import logoDark from "../../img/mindLogoDark.svg";
import { ThemeProvider } from "styled-components";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import lightModeIcon from "../../img/lightMode.svg";
import darkModeIcon from "../../img/darkMode.svg";
import { SignInProps } from "./SignInProps";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { AppearanceMode } from "../../redux/reducers/appearanceModeReducer";
import { useDispatch } from "react-redux";
import { toggleMode } from "../../redux/action-creators/appearanceMode";

export const SignInMobile: React.FC<SignInProps> = ({
  handleInput,
  handleSubmit,
}) => {
  const { config, title } = useTypedSelector((state) => state.appearanceMode);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={config}>
      <Wrapper>
        <Logo src={title === AppearanceMode.light ? logoLight : logoDark} />
        <Form>
          <FormTitle>Умная парковочная система</FormTitle>
          <NavLink to="/signUp" style={{ textDecoration: "none" }}>
            <FormSubtitle>Еще не зарегистрированы?</FormSubtitle>
          </NavLink>
          <Inputs>
            <Input
              placeholder="+7"
              paddingLeft="80vw"
              height="65vh"
              fontSizeMobile="20px"
              onChange={(e: any) => handleInput(e, "phoneNumber")}
            />
            <Input
              type="password"
              paddingLeft="80vw"
              height="65vh"
              fontSizeMobile="20px"
              placeholder="Пароль"
              onChange={(e: any) => handleInput(e, "password")}
            />
          </Inputs>
        </Form>
        <Button title="Войти" onClick={handleSubmit} />
        <AppearanceModeIcon
          src={title === AppearanceMode.light ? darkModeIcon : lightModeIcon}
          onClick={() => dispatch(toggleMode())}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
