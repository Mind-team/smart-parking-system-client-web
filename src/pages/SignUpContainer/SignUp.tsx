import React from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import darkModeIcon from "../../img/darkMode.svg";
import lightModeIcon from "../../img/lightMode.svg";
import logoLight from "../../img/mindLogoLight.svg";
import logoDark from "../../img/mindLogoDark.svg";
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
import { Toaster } from "react-hot-toast";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { useDispatch } from "react-redux";
import { AppearanceMode } from "../../redux/reducers/appearanceModeReducer";
import { toggleMode } from "../../redux/action-creators/appearanceMode";

export const SignUp: React.FC<SignUpProps> = ({
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
          <AppearanceModeIcon
            src={title === AppearanceMode.light ? darkModeIcon : lightModeIcon}
            onClick={() => dispatch(toggleMode())}
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
            <Button title="Зарегистрироваться" onClick={handleSubmit} />
          </Form>
        </RightSide>
      </Wrapper>
    </ThemeProvider>
  );
};
