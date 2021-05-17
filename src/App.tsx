import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomeContainer } from "./pages/HomeContainer/HomeContainer";
import { SignInContainer } from "./pages/SignInContainer/SignInContainer";
import { SignUpContainer } from "./pages/SignUpContainer/SignUpContainer";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/signUp" component={SignUpContainer} />
      <Route exact path="/signIn" component={SignInContainer} />
      <Route exact path="/home" component={HomeContainer} />
    </Switch>
  );
};

export default App;
