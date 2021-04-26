import React from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import darkModeIcon from "../img/darkMode.svg";
import lightModeIcon from "../img/lightMode.svg";
import logoLight from "../img/mindLogoLight.svg";
import logoDark from "../img/mindLogoDark.svg";
import { useMode } from "../hooks/mode.hook";
import { lightModeConfig, darkModeConfig } from "../styles/ModeConfig";
import { ThemeProvider } from "styled-components";
import { 
  InputTitle,
  FormInputs,
  RightSide,
  Form,
  FormTitle,
  AppearanceModeIcon, 
  LeftSide,
  Wrapper,
  MindLogo 
} from "../styles/SignUp.styles";

export const SignUp: React.FC = () => {
  const [mode, toggleMode] = useMode();
  return (
    <ThemeProvider theme={mode === "Light" ? lightModeConfig : darkModeConfig}>
      <Wrapper>
        <LeftSide>
          <MindLogo src={mode === "Light" ? logoLight : logoDark} />
          <AppearanceModeIcon src={mode === "Light" ? darkModeIcon : lightModeIcon} onClick={toggleMode} />
        </LeftSide>
        <RightSide>
          <Form>
            <FormTitle>Умная парковочная система</FormTitle>
            <FormInputs>
              <InputTitle>Номер телефона:</InputTitle>
              <Input placeholder="+7" height="90vh"></Input>
              <InputTitle>Пароль:</InputTitle>
              <Input type="password" placeholder="Пароль" height="90vh"></Input>
              <InputTitle>Регистрационный знак(и)</InputTitle>
              <Input placeholder="x999xx" height="90vh"></Input>
            </FormInputs>
            <Button title="Зарегистрироваться"></Button>
          </Form>
        </RightSide>
      </Wrapper>
    </ThemeProvider>
  );
};
