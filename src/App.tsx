import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { SignInMobile } from "./pages/SignInMobile";
import { useWindowDimensions } from "./hooks/windowDimensions.hook";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/signIn" component={useWindowDimensions().width > 760 ? SignIn : SignInMobile} />
      <Route exact path="/home" component={Home} />
      <Redirect from="/" to="/signIn" />
    </Switch>
  );
};

export default App;
