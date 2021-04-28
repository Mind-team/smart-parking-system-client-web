import React, { useState } from "react";
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
  MindLogo,
} from "../styles/SignUp.styles";
import { useHttp } from "../hooks/http.hook";
import { SignUpDto } from "../common/SignUpDto";
import { ServerResponse } from "../common/ServerResponse.interface";

export const SignUp: React.FC = () => {
  const req = useHttp();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [plate, setPlate] = useState<string>("");

  const handleInput = (
    event: any,
    type: "phoneNumber" | "password" | "plate"
  ) => {
    if (type === "phoneNumber") {
      setPhoneNumber(event.target.value);
      return;
    }
    if (type === "password") {
      setPassword(event.target.value);
      return;
    }
    setPlate(event.target.value);
  };

  const handleSubmit = () => {
    req<SignUpDto, ServerResponse<null>>({
      url: "http://localhost:5000/user/signUp",
      method: "POST",
      body: {
        phoneNumber,
        password,
        plates: [plate]
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => result);
  };

  const [mode, toggleMode] = useMode();
  return (
    <ThemeProvider theme={mode === "Light" ? lightModeConfig : darkModeConfig}>
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
