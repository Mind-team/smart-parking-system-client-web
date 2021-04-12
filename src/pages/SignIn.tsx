import React, { useState } from "react";
import s from "../styles/SignIn.module.sass";
import logo from "../img/mindLogo.svg";
import illustration from "../img/leftSideSVG.svg";
import darkModeIcon from "../img/darkMode.svg";
import { useHttp } from "../hooks/http.hook";
import { UserRecord } from "../common/UserRecord.interface";
import { Redirect } from "react-router-dom";
import { DarkModeIcon, Form, FormButton, FormButtonTitle, FormInput, FormInputs, FormSubtitle, FormTitle, Illustration, LeftSide, MindLogo, RightSide, Wrapper } from "../styles/SignIn.styles";

export const SignIn: React.FC = () => {
  const req = useHttp();
  const [userData, setUserData] = useState<UserRecord | null>();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const handleInput = (event: any, type: "phoneNumber" | "password") =>
    type === "phoneNumber" ?
      setPhoneNumber(event.target.value) :
      setPassword(event.target.value);

  const handleSubmit = () => {
    req<UserRecord>({
      url: "http://localhost:5000/user/signIn",
      method: "POST",
      body: JSON.stringify(
        {
          phoneNumber: phoneNumber,
          password: password
        }
      ),
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
  };
  return (
    <>
      {userData && <Redirect push to="/home" />}
      <Wrapper>
        <LeftSide>
          <MindLogo src={logo} />
          <Illustration src={illustration} />
        </LeftSide>
        <RightSide>
          <DarkModeIcon src={darkModeIcon} />
          <Form>
            <FormTitle>Умная парковочная система</FormTitle>
            <FormSubtitle>Еще не зарегистрированы?</FormSubtitle>
            <FormInputs>
              <FormInput type="text" placeholder="+7" />
              <FormInput type="password" placeholder="Пароль" />
            </FormInputs>
            <FormButton>
              <FormButtonTitle>
                Войти
              </FormButtonTitle>
            </FormButton>
          </Form>
        </RightSide>
      </Wrapper>
    </>
  );
};

