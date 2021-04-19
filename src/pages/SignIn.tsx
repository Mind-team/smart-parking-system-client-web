import React, { useState } from "react";
import logoLight from "../img/mindLogoLight.svg";
import logoDark from "../img/mindLogoDark.svg";
import illustration from "../img/illustrationLight.svg";
import illustrationDark from "../img/illustrationDark.svg";
import lightModeIcon from "../img/lightMode.svg";
import darkModeIcon from "../img/darkMode.svg";
import { useHttp } from "../hooks/http.hook";
import { useMode } from "../hooks/mode.hook";
import { UserRecord } from "../common/UserRecord.interface";
import { Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightModeConfig, darkModeConfig } from "../styles/ModeConfig";
import { SignInData } from "../common/SignInData.type";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
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
  Wrapper 
} from "../styles/SignIn.styles";

export const SignIn: React.FC = () => {
  const req = useHttp();
  const [mode, toggleMode] = useMode();
  const [userData, setUserData] = useState<UserRecord | null>();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const handleInput = (event: any, type: "phoneNumber" | "password") =>
    type === "phoneNumber" ?
      setPhoneNumber(event.target.value) :
      setPassword(event.target.value);

  const handleSubmit = () => 
    req<SignInData, UserRecord>({
      url: "http://localhost:5000/user/signIn",
      method: "POST",
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(result => {
        if (!result.isExpected) {
          // TODO: Error handler
          return;
        }
        setUserData(result.value);
      });

  return (
    <>
      {userData && <Redirect push to="/home" />}
      <ThemeProvider theme={mode === "Light" ? lightModeConfig : darkModeConfig}>
        <Wrapper>
          <LeftSide>
            <MindLogo src={mode === "Light" ? logoLight : logoDark} />
            <Illustration src={mode === "Light" ? illustration : illustrationDark} />
          </LeftSide>
          <RightSide>
            <AppearanceModeIcon src={mode === "Light" ? darkModeIcon : lightModeIcon} onClick={toggleMode} />
            <Form>
              <FormTitle>Умная парковочная система</FormTitle>
              <FormSubtitle>Еще не зарегистрированы?</FormSubtitle>
              <FormInputs>
                <Input placeholder="+7" onChange={(e: any) => handleInput(e, "phoneNumber")} height="90vh" />
                <Input type="password" placeholder="Пароль" onChange={(e: any) => handleInput(e, "password")} height="90vh" />
              </FormInputs>
              <Button title="Войти" onClick={handleSubmit} />
            </Form>
          </RightSide>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

