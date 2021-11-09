import { ModeConfig } from "../store/types/appearanceMode";

export const lightModeConfig: ModeConfig = {
  accent: "#886DEC",
  background: "#EFF1FB",
  header: "#FFFFFF",
  plainText: "#000000",
  widgetBackground: "#FFFFFF",
  // TODO: remove old
  backgroundColor: "#ffffff",
  additionalBGColor: "#F7F7F7",
  textColor: "#393939",
  actionColor: "#61A0EA",
};

export const darkModeConfig: ModeConfig = {
  accent: "#886DEC",
  background: "#000000",
  header: "#1C1C1C",
  plainText: "#FFFFFF",
  widgetBackground: "#1C1C1C",
  // TODO: remove old
  backgroundColor: "#191919",
  additionalBGColor: "#000000",
  textColor: "#ffffff",
  actionColor: "#61A0EA",
};
