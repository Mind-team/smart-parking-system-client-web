import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { SignInDto } from "../../common/SignInDto";
import { UserRecord } from "../../common/UserRecord.interface";
import { useHttp } from "../../hooks/http.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { SignIn } from "./SignIn";
import { SignInMobile } from "./SignInMobile";

export const SignInContainer = () => {
  const req = useHttp();
  const [userData, setUserData] = useState<UserRecord | null>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInput = (event: any, type: "phoneNumber" | "password") =>
    type === "phoneNumber"
      ? setPhoneNumber(event.target.value)
      : setPassword(event.target.value);

  const handleSubmit = () =>
    req<SignInDto, UserRecord>({
      url: "http://localhost:5000/user/signIn",
      method: "POST",
      body: {
        phoneNumber,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      if (!result.isExpected) {
        // TODO: Error handler
        return;
      }
      setUserData(result.value);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("password", password);
    });

  useEffect(() => {
    const [phoneNumber, password] = [localStorage.getItem("phoneNumber"), localStorage.getItem("password")];
    if (
      !(phoneNumber && password)
    ) {
      return;
    }
    req<SignInDto, UserRecord>({
      url: "http://localhost:5000/user/signIn",
      method: "POST",
      body: {
        phoneNumber,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setUserData(res.value));
  }, []);

  return (
    <>
      {userData && <Redirect push to="/home" />}
      {useWindowDimensions().width > 760 ? (
        <SignIn handleInput={handleInput} handleSubmit={handleSubmit} />
      ) : (
        <SignInMobile handleInput={handleInput} handleSubmit={handleSubmit} />
      )}
    </>
  );
};
