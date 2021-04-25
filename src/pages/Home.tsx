import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import darkModeIcon from "../img/darkMode.svg";
import lightModeIcon from "../img/lightMode.svg";
import logoLight from "../img/mindLogoLight.svg";
import logoDark from "../img/mindLogoDark.svg";
import { useMode } from "../hooks/mode.hook";
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
} from "../styles/SignUP.styles";
// const widthRate = 100 / 1920;
// const heightRate = 100 / 1080;
// const Wrapper = styled.div` 
//   color: red;
//   width: calc(193vw*${widthRate});
//   height: calc(1080vh*${heightRate});
// `;
// const Icon = styled.img`

//а `;


export const Home: React.FC = () => {
  const [mode, toggleMode] = useMode();
  return (
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
            <Input placeholder="+7"></Input>
            <InputTitle>Пароль:</InputTitle>
            <Input type="password" placeholder="Пароль"></Input>
            <InputTitle>Регистрационный знак:</InputTitle>
            <Input placeholder="x999xx"></Input>
          </FormInputs>
          <Button title="Зарегистрироваться"></Button>
        </Form>
      </RightSide>
    </Wrapper>
  );
};
