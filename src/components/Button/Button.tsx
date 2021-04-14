import React from "react";
import { ButtonTitle, ButtonWrapper } from "./ButtonStyles";

interface Props {
  title: string;
  width: string;
  height: string;
  [name: string]: any;
}

export const Button: React.FC<Partial<Props>> = ({
  title = "ОК",
  width = "175vw",
  height = "80vh",
  ...props
}) => {
  return (
    <ButtonWrapper {...props} width={width} height={height}>
      <ButtonTitle>
        {title}
      </ButtonTitle>
    </ButtonWrapper>
  );
};