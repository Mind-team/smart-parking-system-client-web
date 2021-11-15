import { ThemeProvider } from "styled-components";
import { FC } from "react";
import { ParkingsSortBar, Props } from "./ParkingsSortBar";
import { useTypedSelector } from "../../hooks/typedSelector.hook";

export const ParkingsSortBarWrapper: FC<Props> = (args) => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  return (
    <ThemeProvider theme={config}>
      <ParkingsSortBar {...args} />
    </ThemeProvider>
  );
};
