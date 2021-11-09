import { ThemeProvider } from "styled-components";
import { lightModeConfig, darkModeConfig } from "../src/styles/ModeConfig";

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider
        theme={
          localStorage.getItem("mode") === "light"
            ? lightModeConfig
            : darkModeConfig
        }
      >
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
