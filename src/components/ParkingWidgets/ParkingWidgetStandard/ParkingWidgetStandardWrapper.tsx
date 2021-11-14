import { useTypedSelector } from "../../../hooks/typedSelector.hook";
import { ThemeProvider } from "styled-components";
import { FC } from "react";
import { ParkingWidgetStandard } from "./ParkingWidgetStandard";
import { FilledWidget } from "../filledWidget.interface";

export const ParkingWidgetStandardWrapper: FC<FilledWidget> = (args) => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  return (
    <ThemeProvider theme={config}>
      <ParkingWidgetStandard {...args} />
    </ThemeProvider>
  );
};
