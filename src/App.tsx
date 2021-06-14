import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useRoutes } from "./hooks/routes.hook";
import { useWindowDimensions } from "./hooks/windowDimensions.hook";
import { HistoryContainer } from "./pages/HistoryContainer/HistoryContainer";
import { HomeContainer } from "./pages/HomeContainer/HomeContainer";
import { ParkingDetailsContainer } from "./pages/ParkingDetailsContainer/ParkingDetailsContainer";
import { ProfileContainer } from "./pages/ProfileContainer/ProfileContainer";
import { SignInContainer } from "./pages/SignInContainer/SignInContainer";
import { SignUpContainer } from "./pages/SignUpContainer/SignUpContainer";

const App: React.FC = () => {
  const { width } = useWindowDimensions();
  const routes = useRoutes();
  return (
    <Switch>
      <Route exact path={routes.signUp()} component={SignUpContainer} />
      <Route exact path={routes.signIn()} component={SignInContainer} />
      <>
        {width > 760 ? <Navbar /> : <Navbar />}
        <Route exact path={routes.home()} component={HomeContainer} />
        <Route exact path={routes.history()} component={HistoryContainer} />
        <Route
          exact
          path={routes.parkingDetails()}
          component={ParkingDetailsContainer}
        />
        <Route exact path={routes.profile()} component={ProfileContainer} />
      </>
    </Switch>
  );
};

export default App;
