import React from "react";
import { ThemeProvider } from "styled-components";
import { useMode } from "../../hooks/mode.hook";
import { darkModeConfig, lightModeConfig } from "../../styles/ModeConfig";
import {
  Wrapper,
  MindLogo,
  Form,
  FormTitle,
  Inputs,
  InputTitle,
} from "../../styles/SignUpMobile.styles";
import logoLight from "../../img/mindLogoLight.svg";
import logoDark from "../../img/mindLogoDark.svg";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { AppearanceModeIcon } from "../../styles/SignInMobile.styles";
import lightModeIcon from "../../img/lightMode.svg";
import darkModeIcon from "../../img/darkMode.svg";

export const SignUpMobile = () => {
  const [mode, setMode] = useMode();
  return (
    <ThemeProvider theme={mode === "Light" ? lightModeConfig : darkModeConfig}>
      <Wrapper>
        <MindLogo src={mode === "Light" ? logoLight : logoDark} />
        <Form>
          <FormTitle>Умная парковочная система</FormTitle>
          <Inputs>
            <InputTitle>Номер телефона</InputTitle>
            <Input
              placeholder="+7"
              paddingLeft="80vw"
              height="65vh"
              fontSizeMobile="20px"
            />
            <InputTitle>Пароль</InputTitle>
            <Input
              placeholder="Пароль"
              type="password"
              paddingLeft="80vw"
              height="65vh"
              fontSizeMobile="20px"
            />
            <InputTitle>Регистрационный знак</InputTitle>
            <Input
              placeholder="x999xx"
              paddingLeft="80vw"
              height="65vh"
              fontSizeMobile="20px"
            />
          </Inputs>
          <Button title="Войти" />
          <AppearanceModeIcon
            src={mode === "Light" ? darkModeIcon : lightModeIcon}
          />
        </Form>
      </Wrapper>
    </ThemeProvider>
  );
};
