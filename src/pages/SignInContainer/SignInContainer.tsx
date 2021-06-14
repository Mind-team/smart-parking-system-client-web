import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { SignInDto } from "../../common/SignInDto";
import { UserRecord } from "../../common/UserRecord.interface";
import { useAPI } from "../../hooks/api.hook";
import { useHttp } from "../../hooks/http.hook";
import { useRoutes } from "../../hooks/routes.hook";
import { useWindowDimensions } from "../../hooks/windowDimensions.hook";
import { SignIn } from "./SignIn";
import { SignInMobile } from "./SignInMobile";

export const SignInContainer = () => {
  const req = useHttp();
  const routes = useRoutes();
  const api = useAPI();
  const { width } = useWindowDimensions();
  const [userData, setUserData] = useState<UserRecord>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (event: any, type: "phoneNumber" | "password") =>
    type === "phoneNumber"
      ? setPhoneNumber(event.target.value)
      : setPassword(event.target.value);

  const handleSubmit = () =>
    req<SignInDto, UserRecord>({
      url: api.signIn(),
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
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("password", password);
      setUserData(result.value);
    });

  useEffect(() => {
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (!(phoneNumber && password)) {
      return;
    }
    req<SignInDto, UserRecord>({
      url: api.signIn(),
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
    });
  }, []);

  if (userData) {
    return <Redirect to={routes.home()} />;
  }

  return (
    <>
      {width > 760 ? (
        <SignIn handleInput={handleInput} handleSubmit={handleSubmit} />
      ) : (
        <SignInMobile handleInput={handleInput} handleSubmit={handleSubmit} />
      )}
    </>
  );
};
