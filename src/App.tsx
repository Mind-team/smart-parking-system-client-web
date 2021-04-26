import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/signIn" component={SignIn} />
      <Redirect from="/" to="/signIn" />
    </Switch>
  );
};

export default App;
