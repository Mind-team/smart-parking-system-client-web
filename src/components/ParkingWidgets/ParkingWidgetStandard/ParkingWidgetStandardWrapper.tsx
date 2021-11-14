import { useTypedSelector } from "../../../hooks/typedSelector.hook";
import { ThemeProvider } from "styled-components";
import { FC } from "react";
import {
  ParkingWidgetStandard,
  ParkingWidgetStandardProps,
} from "./ParkingWidgetStandard";

export const ParkingWidgetStandardWrapper: FC<ParkingWidgetStandardProps> = (
  args,
) => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  return (
    <ThemeProvider theme={config}>
      <ParkingWidgetStandard {...args} />
    </ThemeProvider>
  );
};
