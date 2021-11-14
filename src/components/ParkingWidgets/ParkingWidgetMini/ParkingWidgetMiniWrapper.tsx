import { useTypedSelector } from "../../../hooks/typedSelector.hook";
import { ThemeProvider } from "styled-components";
import { ParkingWidgetMini, Props } from "./ParkingWidgetMini";
import { FC } from "react";

export const ParkingWidgetMiniWrapper: FC<Props> = (args) => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  return (
    <ThemeProvider theme={config}>
      <ParkingWidgetMini {...args} />
    </ThemeProvider>
  );
};
