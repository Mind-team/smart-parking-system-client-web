import React from "react";
import { ButtonTitle, ButtonWrapper } from "./ButtonStyles";

interface Props {
  title: string;
}

export const Button: React.FC<Props> = ({
  title = "ОК"
}) => {
  return (
    <ButtonWrapper>
      <ButtonTitle>
        {title}
      </ButtonTitle>
    </ButtonWrapper>
  );
};