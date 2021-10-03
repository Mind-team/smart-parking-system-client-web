import { FC } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useRoutes } from "./hooks/routes.hook";
import { HistoryContainer } from "./pages/History/HistoryContainer";
import { HomeContainer } from "./pages/Home/HomeContainer";
import { ParkingDetailsContainer } from "./pages/ParkingDetails/ParkingDetailsContainer";
import { ProfileContainer } from "./pages/Profile/ProfileContainer";
import { SignInContainer } from "./pages/SignIn/SignInContainer";
import { SignUpContainer } from "./pages/SignUp/SignUpContainer";
import { detectMode } from "./store/action-creators/appearanceMode";
import { dictionary, LangContext } from "./context/lang.context";
import { Lang } from "./enums/lang.enum";
import { useLang } from "./hooks/lang.hook";

const App: FC = () => {
  const routes = useRoutes();
  useDispatch()(detectMode());
  return (
    <LangContext.Provider value={dictionary[useLang()]}>
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
    </LangContext.Provider>
  );
};

export default App;
