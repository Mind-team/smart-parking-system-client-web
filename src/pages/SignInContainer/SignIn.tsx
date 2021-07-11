import React from "react";
import logoLight from "../../img/mindLogoLight.svg";
import logoDark from "../../img/mindLogoDark.svg";
import illustration from "../../img/illustrationLight.svg";
import illustrationDark from "../../img/illustrationDark.svg";
import lightModeIcon from "../../img/lightMode.svg";
import darkModeIcon from "../../img/darkMode.svg";
import { ThemeProvider } from "styled-components";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
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
  Wrapper,
} from "./SignIn.styles";
import { SignInProps } from "./SignInProps";
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { AppearanceMode } from "../../store/types/appearanceMode";
import { useDispatch } from "react-redux";
import { toggleMode } from "../../store/action-creators/appearanceMode";

export const SignIn: React.FC<SignInProps> = ({
  handleInput,
  handleSubmit,
}) => {
  const { title, config } = useTypedSelector((state) => state.appearanceMode);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={config}>
      <Toaster />
      <Wrapper>
        <LeftSide>
          <MindLogo
            src={title === AppearanceMode.light ? logoLight : logoDark}
          />
          <Illustration
            src={
              title === AppearanceMode.light ? illustration : illustrationDark
            }
          />
        </LeftSide>
        <RightSide>
          <AppearanceModeIcon
            src={title === AppearanceMode.light ? darkModeIcon : lightModeIcon}
            onClick={() => dispatch(toggleMode())}
          />
          <Form>
            <FormTitle>Умная парковочная система</FormTitle>
            <NavLink to="/signUp" style={{ textDecoration: "none" }}>
              <FormSubtitle>Еще не зарегистрированы?</FormSubtitle>
            </NavLink>
            <FormInputs>
              <Input
                placeholder="+7"
                onChange={(e: any) => handleInput(e, "phoneNumber")}
                height="90vh"
              />
              <Input
                type="password"
                placeholder="Пароль"
                onChange={(e: any) => handleInput(e, "password")}
                height="90vh"
              />
            </FormInputs>
            <Button title="Войти" onClick={handleSubmit} />
          </Form>
        </RightSide>
      </Wrapper>
    </ThemeProvider>
  );
};
