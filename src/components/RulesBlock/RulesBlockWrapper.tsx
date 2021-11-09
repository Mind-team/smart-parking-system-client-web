import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { ThemeProvider } from "styled-components";
import { RulesBlock } from "./RulesBlock";

export const RulesBlockWrapper = () => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  return (
    <ThemeProvider theme={config}>
      <RulesBlock />
    </ThemeProvider>
  );
};
