import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useRoute } from "./hooks/routes";
import { LoginWrapper } from "./pages/Login";
import { HomeContainer } from "./pages/Home";
import { MainLayout } from "./layouts/Main.layout";
import { HistoryContainer } from "./pages/History";

const App: FC = () => {
  const route = useRoute();

  return (
    <Routes>
      <Route path={route.auth.login} element={<LoginWrapper />} />
      <Route path="/" element={<MainLayout />}>
        <Route path={route.home.main} element={<HomeContainer />} />
        <Route path={route.history.main} element={<HistoryContainer />} />
      </Route>
      <Route path="*" element={<Navigate to={route.auth.login} />} />
    </Routes>
  );
};

export default App;
