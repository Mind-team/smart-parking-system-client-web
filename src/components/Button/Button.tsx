import React from "react";
import { ButtonTitle, ButtonWrapper } from "./ButtonStyles";

interface Props {
  title: string;
  [name: string]: any;
}

export const Button: React.FC<Props> = ({
  title = "ОК",
  ...props
}) => {
  return (
    <ButtonWrapper {...props}>
      <ButtonTitle>
        {title}
      </ButtonTitle>
    </ButtonWrapper>
  );
};