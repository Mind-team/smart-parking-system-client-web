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
import { useMode } from "../../hooks/mode.hook";
import { darkModeConfig, lightModeConfig } from "../../styles/ModeConfig";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import lightModeIcon from "../../img/lightMode.svg";
import darkModeIcon from "../../img/darkMode.svg";
import { SignInProps } from "./SignInProps";

export const SignInMobile: React.FC<SignInProps> = ({
  handleInput,
  handleSubmit,
}) => {
  const [mode, toggleMode] = useMode();
  return (
    <ThemeProvider theme={mode === "Light" ? lightModeConfig : darkModeConfig}>
      <Wrapper>
        <Logo src={mode === "Light" ? logoLight : logoDark} />
        <Form>
          <FormTitle>Умная парковочная система</FormTitle>
          <FormSubtitle>Еще не зарегистрированы?</FormSubtitle>
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
          src={mode === "Light" ? darkModeIcon : lightModeIcon}
          onClick={toggleMode}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
