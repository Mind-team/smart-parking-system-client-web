import React from "react";
import { Form, Logo, Wrapper, FormSubtitle, FormTitle, Inputs } from "../styles/SignInMobile.styles";
import mindLight from "../img/mindLogoLightMobile.svg";
import { ThemeProvider } from "styled-components";
import { useMode } from "../hooks/mode.hook";
import { darkModeConfig, lightModeConfig } from "../styles/ModeConfig";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";


export const SignInMobile = () => {
  const [mode, toggleMode] = useMode();
  return (
    <>
      <ThemeProvider theme={mode === "Light" ? lightModeConfig : darkModeConfig}>
        <Wrapper>
          <Logo src={mindLight} />
          <Form>
            <FormTitle>Умная парковочная система</FormTitle>
            <FormSubtitle>Еще не зарегистрированы?</FormSubtitle>
            <Inputs>
              <Input placeholder="+7" paddingLeft="80vw" height="65vh" fontSizeMobile="20px" />
              <Input type="password" paddingLeft="80vw" height="65vh" fontSizeMobile="20px" placeholder="Пароль" />
            </Inputs>
          </Form>
          <Button title="Войти" />
        </Wrapper>
      </ThemeProvider>  
    </>
  );
};