import React, { useState } from "react";
import { ServerResponse } from "../../common/ServerResponse.interface";
import { SignUpDto } from "../../common/SignUpDto";
import { useHttp } from "../../hooks/http.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { SignUp } from "./SignUp";
import { SignUpMobile } from "./SignUpMobile";

export const SignUpContainer = () => {
  const req = useHttp();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [plate, setPlate] = useState<string>("");

  const handleInput = (
    event: any,
    type: "phoneNumber" | "password" | "plate"
  ) => {
    if (type === "phoneNumber") {
      setPhoneNumber(event.target.value);
      return;
    }
    if (type === "password") {
      setPassword(event.target.value);
      return;
    }
    setPlate(event.target.value);
  };

  const handleSubmit = () => {
    req<SignUpDto, ServerResponse<null>>({
      url: "http://localhost:5000/user/signUp",
      method: "POST",
      body: {
        phoneNumber,
        password,
        plates: [plate],
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => result);
  };
  return useWindowDimensions().width > 760 ? <SignUp /> : <SignUpMobile />;
};
