import { InfoWidget, Props } from "./InfoWidget";
import { FC } from "react";
import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { ThemeProvider } from "styled-components";

export const InfoWidgetWrapper: FC<Props> = (props) => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  return (
    <ThemeProvider theme={config}>
      <InfoWidget {...props} />
    </ThemeProvider>
  );
};
