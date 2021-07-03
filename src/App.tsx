import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useRoutes } from "./hooks/routes.hook";
import { HistoryContainer } from "./pages/HistoryContainer/HistoryContainer";
import { HomeContainer } from "./pages/HomeContainer/HomeContainer";
import { ParkingDetailsContainer } from "./pages/ParkingDetailsContainer/ParkingDetailsContainer";
import { ProfileContainer } from "./pages/ProfileContainer/ProfileContainer";
import { SignInContainer } from "./pages/SignInContainer/SignInContainer";
import { SignUpContainer } from "./pages/SignUpContainer/SignUpContainer";
import { detectMode } from "./store/action-creators/appearanceMode";

const App: React.FC = () => {
  const routes = useRoutes();
  useDispatch()(detectMode());

  return (
    <Switch>
      <Route exact path={routes.signUp()} component={SignUpContainer} />
      <Route exact path={routes.signIn()} component={SignInContainer} />
      <>
        <Navbar />
        <Route exact path={routes.home()} component={HomeContainer} />
        <Route exact path={routes.history()} component={HistoryContainer} />
        <Route exact path={routes.profile()} component={ProfileContainer} />
        <Route
          exact
          path={routes.parkingDetails()}
          component={ParkingDetailsContainer}
        />
      </>
    </Switch>
  );
};

export default App;
