import React from "react";
import { ButtonTitle, ButtonWrapper } from "./Button.styles";

interface Props {
  title: string;
  [name: string]: any;
}

export const Button: React.FC<Partial<Props>> = ({
  title = "ОК",
  ...props
}) => {
  return (
    <ButtonWrapper {...props}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonWrapper>
  );
};
