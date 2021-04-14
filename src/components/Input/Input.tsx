import React from "react";
import { InputWrapper } from "./InputStyles";

interface Props {
  type: "text" | "password";
  placeholder: string;
  [name: string]: any;
}

export const Input: React.FC<Partial<Props>> = ({
  type = "text",
  placeholder = "",
  ...props
}) => 
  <InputWrapper type={type} placeholder={placeholder} {...props} />;
