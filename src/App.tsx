import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/home" component={Home} />
      <Redirect from="/" to="/signIn" />
    </Switch>
  );
};

export default App;
