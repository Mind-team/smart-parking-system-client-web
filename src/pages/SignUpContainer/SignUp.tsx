import React from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import darkModeIcon from "../../img/darkMode.svg";
import lightModeIcon from "../../img/lightMode.svg";
import logoLight from "../../img/mindLogoLight.svg";
import logoDark from "../../img/mindLogoDark.svg";
import { useMode } from "../../hooks/mode.hook";
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
  MindLogo,
} from "../../styles/SignUp.styles";
import { SignUpProps } from "./SignUpProps";

export const SignUp: React.FC<SignUpProps> = ({
  handleInput,
  handleSubmit,
}) => {
  const [mode, toggleMode, modeConfig] = useMode();
  return (
    <ThemeProvider theme={modeConfig}>
      <Wrapper>
        <LeftSide>
          <MindLogo src={mode === "Light" ? logoLight : logoDark} />
          <AppearanceModeIcon
            src={mode === "Light" ? darkModeIcon : lightModeIcon}
            onClick={toggleMode}
          />
        </LeftSide>
        <RightSide>
          <Form>
            <FormTitle>Умная парковочная система</FormTitle>
            <FormInputs>
              <InputTitle>Номер телефона:</InputTitle>
              <Input
                placeholder="+7"
                height="90vh"
                onChange={(e: any) => handleInput(e, "phoneNumber")}
              />
              <InputTitle>Пароль:</InputTitle>
              <Input
                type="password"
                placeholder="Пароль"
                height="90vh"
                onChange={(e: any) => handleInput(e, "password")}
              />
              <InputTitle>Регистрационный знак(и)</InputTitle>
              <Input
                placeholder="x999xx"
                height="90vh"
                onChange={(e: any) => handleInput(e, "plate")}
              />
            </FormInputs>
            <Button title="Зарегистрироваться" onClick={handleSubmit}/>
          </Form>
        </RightSide>
      </Wrapper>
    </ThemeProvider>
  );
};
