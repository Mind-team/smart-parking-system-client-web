import { FC, useState } from "react";
import toast from "react-hot-toast";
import { Redirect } from "react-router-dom";
import { ServerResponse } from "../../common/ServerResponse.interface";
import { SignUpDto } from "../../common/SignUpDto";
import { useHttp } from "../../hooks/http.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { SignUp } from "./SignUp";
import { SignUpMobile } from "./SignUpMobile";

export const SignUpContainer: FC = () => {
  const [req, routes, width] = [
    useHttp(),
    useRoutes(),
    useWindowDimensions().width,
  ];
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [plate, setPlate] = useState<string>("");
  const [isAuth, setAuth] = useState(false);

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
    const toastId = toast.loading("Loading...");
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
    }).then((result) => {
      if (!result.isExpected) {
        toast.dismiss(toastId);
        toast.error(result.message);
        return;
      }
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("password", password);
      toast.dismiss(toastId);
      toast.success("Success");
      setAuth(true);
    });
  };

  if (isAuth) {
    return <Redirect to={routes.signIn()} />;
  }

  return width > 760 ? (
    <SignUp handleInput={handleInput} handleSubmit={handleSubmit} />
  ) : (
    <SignUpMobile handleInput={handleInput} handleSubmit={handleSubmit} />
  );
};
