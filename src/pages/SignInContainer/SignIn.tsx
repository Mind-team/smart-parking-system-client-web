import React from "react";
import logoLight from "../../img/mindLogoLight.svg";
import logoDark from "../../img/mindLogoDark.svg";
import illustration from "../../img/illustrationLight.svg";
import illustrationDark from "../../img/illustrationDark.svg";
import lightModeIcon from "../../img/lightMode.svg";
import darkModeIcon from "../../img/darkMode.svg";
import { useMode } from "../../hooks/mode.hook";
import { ThemeProvider } from "styled-components";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import {
  AppearanceModeIcon,
  Form,
  FormInputs,
  FormSubtitle,
  FormTitle,
  Illustration,
  LeftSide,
  MindLogo,
  RightSide,
  Wrapper,
} from "../../styles/SignIn.styles";
import { SignInProps } from "./SignInProps";
import { NavLink } from "react-router-dom";

export const SignIn: React.FC<SignInProps> = ({
  handleInput,
  handleSubmit,
}) => {
  const [mode, toggleMode, modeConfig] = useMode();

  return (
    <ThemeProvider theme={modeConfig}>
      <Wrapper>
        <LeftSide>
          <MindLogo src={mode === "Light" ? logoLight : logoDark} />
          <Illustration
            src={mode === "Light" ? illustration : illustrationDark}
          />
        </LeftSide>
        <RightSide>
          <AppearanceModeIcon
            src={mode === "Light" ? darkModeIcon : lightModeIcon}
            onClick={toggleMode}
          />
          <Form>
            <FormTitle>Умная парковочная система</FormTitle>
            <NavLink to="/signUp" style={{ textDecoration: "none" }}>
              <FormSubtitle>Еще не зарегистрированы?</FormSubtitle>
            </NavLink>
            <FormInputs>
              <Input
                placeholder="+7"
                onChange={(e: any) => handleInput(e, "phoneNumber")}
                height="90vh"
              />
              <Input
                type="password"
                placeholder="Пароль"
                onChange={(e: any) => handleInput(e, "password")}
                height="90vh"
              />
            </FormInputs>
            <Button title="Войти" onClick={handleSubmit} />
          </Form>
        </RightSide>
      </Wrapper>
    </ThemeProvider>
  );
};
