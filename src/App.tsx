import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignInMobile } from "./pages/SignInMobile";
import { SignUp } from "./pages/SignUp";
import { useWindowDimensions } from "./hooks/windowDimensions.hook";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/signIn" component={useWindowDimensions().width > 760 ? SignIn : SignInMobile} />
      <Redirect from="/" to="/signIn" />
    </Switch>
  );
};

export default App;
