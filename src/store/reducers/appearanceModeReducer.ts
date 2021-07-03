import { Reducer } from "redux";
import { darkModeConfig, lightModeConfig } from "../../styles/ModeConfig";

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

const defaultState = {
  title: AppearanceMode.light,
  config: lightModeConfig,
};

export enum AppearanceModeActionType {
  SWITCH_TO_LIGHT_MODE = "SWITCH_TO_LIGHT_MODE",
  SWITCH_TO_DARK_MODE = "SWITCH_TO_DARK_MODE",
}

interface SwitchToLightMode {
  type: AppearanceModeActionType.SWITCH_TO_LIGHT_MODE;
}

interface SwitchToDarkMode {
  type: AppearanceModeActionType.SWITCH_TO_DARK_MODE;
}

export type AppearanceModeAction = SwitchToLightMode | SwitchToDarkMode;

export const appearanceModeReducer: Reducer<AppearanceModeState> = (
  state = defaultState,
  action: AppearanceModeAction
) => {
  switch (action.type) {
    case AppearanceModeActionType.SWITCH_TO_LIGHT_MODE:
      return { title: AppearanceMode.light, config: lightModeConfig };
    case AppearanceModeActionType.SWITCH_TO_DARK_MODE:
      return { title: AppearanceMode.dark, config: darkModeConfig };
    default:
      return state;
  }
};
