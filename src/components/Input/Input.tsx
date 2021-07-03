import React from "react";
import { InputWrapper } from "./InputStyles";

interface Props {
  type: "text" | "password";
  placeholder: string;
  height: string;
  paddingLeft: string;
  fontSize: string;
  fontSizeMobile: string;
  [name: string]: any;
}

export const Input: React.FC<Partial<Props>> = ({
  type = "text",
  placeholder = "",
  height = "76vh",
  paddingLeft = "25vw",
  fontSize = "35px",
  fontSizeMobile = "25px",
  ...props
}) => (
  <InputWrapper
    type={type}
    placeholder={placeholder}
    height={height}
    paddingLeft={paddingLeft}
    fontSize={fontSize}
    fontSizeMobile={fontSizeMobile}
    {...props}
  />
);
