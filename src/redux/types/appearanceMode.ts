export interface ModeConfig {
  backgroundColor: string;
  textColor: string;
  actionColor: string;
  additionalBGColor?: string;
}

export enum AppearanceMode {
  light = "LIGHT",
  dark = "DARK",
}

export interface AppearanceModeState {
  title: AppearanceMode;
  config: ModeConfig;
}

export enum AppearanceModeActionType {
  SWITCH_TO_LIGHT_MODE = "SWITCH_TO_LIGHT_MODE",
  SWITCH_TO_DARK_MODE = "SWITCH_TO_DARK_MODE",
}

export interface SwitchToLightMode {
  type: AppearanceModeActionType.SWITCH_TO_LIGHT_MODE;
}

export interface SwitchToDarkMode {
  type: AppearanceModeActionType.SWITCH_TO_DARK_MODE;
}

export type AppearanceModeAction = SwitchToLightMode | SwitchToDarkMode;