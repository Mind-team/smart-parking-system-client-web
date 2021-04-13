export interface ModeConfig {
  backgroundColor: string;
  textColor: string;
  actionColor: string;
  additionalBGColor?: string;
}

export const lightModeConfig: ModeConfig = {
  backgroundColor: "#fffff",
  additionalBGColor: "#F7F7F7",
  textColor: "#393939",
  actionColor: "#61A0EA",
};

export const darkModeConfig: ModeConfig = {
  backgroundColor: "#191919",
  additionalBGColor: "#000000",
  textColor: "#ffffff",
  actionColor: "#61A0EA",
};