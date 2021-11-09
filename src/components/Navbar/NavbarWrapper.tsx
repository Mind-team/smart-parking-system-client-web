import { Navbar } from "./Navbar";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { ThemeProvider } from "styled-components";

export const NavbarWrapper = () => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  return (
    <ThemeProvider theme={config}>
      <Navbar />
    </ThemeProvider>
  );
};
