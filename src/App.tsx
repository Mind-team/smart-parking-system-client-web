import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
};

export default App;
