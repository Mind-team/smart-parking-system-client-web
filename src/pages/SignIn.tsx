import React, { useEffect, useState } from "react";
import logoLight from "../img/mindLogoLight.svg";
import logoDark from "../img/mindLogoDark.svg";
import illustration from "../img/illustrationLight.svg";
import illustrationDark from "../img/illustrationDark.svg";
import lightModeIcon from "../img/lightMode.svg";
import darkModeIcon from "../img/darkMode.svg";
import { useHttp } from "../hooks/http.hook";
import { UserRecord } from "../common/UserRecord.interface";
import { Redirect } from "react-router-dom";
import { AppearanceModeIcon, Form, FormButton, FormButtonTitle, FormInput, FormInputs, FormSubtitle, FormTitle, Illustration, LeftSide, MindLogo, RightSide, Wrapper } from "../styles/SignIn.styles";
import { ThemeProvider } from "styled-components";
import { lightModeConfig, darkModeConfig } from "../styles/ModeConfig";
import { SignInData } from "../common/SignInData.type";

export const SignIn: React.FC = () => {
  const req = useHttp();
  const [mode, setMode] = useState<"Light" | "Dark">("Light");
  const [userData, setUserData] = useState<UserRecord | null>();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const handleInput = (event: any, type: "phoneNumber" | "password") =>
    type === "phoneNumber" ?
      setPhoneNumber(event.target.value) :
      setPassword(event.target.value);

  const handleSubmit = () => 
    req<UserRecord>({
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

  const changeAppearanceMode = () => {
    if (mode === "Light") {
      setMode("Dark");
      localStorage.setItem("Mode", "Dark");
      return;
    }
    setMode("Light");
    localStorage.setItem("Mode", "Light");
  };

  useEffect(() => {
    const mode = localStorage.getItem("Mode");
    if (mode === "Dark") {
      setMode("Dark");
      return;
    }
    setMode("Light");
  }, []);

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
            <AppearanceModeIcon src={mode === "Light" ? darkModeIcon : lightModeIcon} onClick={changeAppearanceMode} />
            <Form>
              <FormTitle>Умная парковочная система</FormTitle>
              <FormSubtitle>Еще не зарегистрированы?</FormSubtitle>
              <FormInputs>
                <FormInput type="text" placeholder="+7" onChange={e => handleInput(e, "phoneNumber")} />
                <FormInput type="password" placeholder="Пароль" onChange={e => handleInput(e, "password")} />
              </FormInputs>
              <FormButton onClick={handleSubmit}>
                <FormButtonTitle>
                  Войти
                </FormButtonTitle>
              </FormButton>
            </Form>
          </RightSide>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

