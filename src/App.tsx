import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { UserRecord } from "./common/UserRecord.interface";
import { useHttp } from "./hooks/http.hook";
import { SignInData } from "./common/SignInData.type";

const isUserAuthData = () => {
  if (!(localStorage.getItem("phoneNumber") && localStorage.getItem("password"))) {
    return false;
  }
  return true;
};

const App: React.FC = () => {
  const req = useHttp();
  const [userData, setUserData] = useState<UserRecord | null>();

  const getUserData = () => {
    const userData: SignInData = {
      phoneNumber: localStorage.getItem("phoneNumber") as string,
      password: localStorage.getItem("password") as string,
    };
    req<UserRecord>({
      url: "http://localhost:5000/user/signIn",
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(
        result => result.isExpected ?
          setUserData(result.value) :
          setUserData(null)
      );
  };

  useEffect(() => isUserAuthData() ? getUserData() : undefined, []);

  return (
    <Switch>
      <Route exact path="/signIn" component={SignIn}>
        {userData && <Redirect exact to="home" />}
      </Route>
      <Route exact path="/home" component={Home}>
        {!userData && <Redirect exact to="signIn" />}
      </Route>
      <Redirect from="/" to="/signIn" />
    </Switch>
  );
};

export default App;
