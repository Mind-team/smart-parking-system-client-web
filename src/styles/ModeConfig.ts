export interface ModeConfig {
  backgroundColor: string;
  textColor: string;
  actionColor: string;
  additionalBGColor?: string;
}

export interface LightModeConfig extends ModeConfig {
  backgroundColor: "#ffffff";
  additionalBGColor: "#F7F7F7";
  textColor: "#393939";
  actionColor: "#61A0EA";
}

export interface DarkModeConfig extends ModeConfig {
  backgroundColor: "#191919";
  additionalBGColor: "#000000";
  textColor: "#ffffff";
  actionColor: "#61A0EA";
}

export const lightModeConfig: LightModeConfig = {
  backgroundColor: "#ffffff",
  additionalBGColor: "#F7F7F7",
  textColor: "#393939",
  actionColor: "#61A0EA",
};

export const darkModeConfig: DarkModeConfig = {
  backgroundColor: "#191919",
  additionalBGColor: "#000000",
  textColor: "#ffffff",
  actionColor: "#61A0EA",
};