import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import { Dictionary, LanguageContext } from "./context/languages";
import { ThemeProvider } from "styled-components";
import { useTheme } from "@ermolaev/mind-ui";
import { useLanguage } from "./hooks/languages";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={useTheme()}>
      <LanguageContext.Provider value={Dictionary[useLanguage()]}>
        <Router>
          <App />
        </Router>
      </LanguageContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
