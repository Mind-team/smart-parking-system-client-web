import {
  darkModeConfig,
  DarkModeConfig,
  lightModeConfig,
  LightModeConfig,
} from "../../styles/ModeConfig";

export enum AppearanceMode {
  light = "LIGHT",
  dark = "DARK",
}

interface LightAppearanceModeState {
  title: AppearanceMode.light;
  config: LightModeConfig;
}

interface DarkAppearanceModeState {
  title: AppearanceMode.dark;
  config: DarkModeConfig;
}

export type AppearanceModeState = LightAppearanceModeState | DarkAppearanceModeState;

const defaultState: LightAppearanceModeState = {
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

export const appearanceModeReducer = (
  state = defaultState,
  action: AppearanceModeAction
): AppearanceModeState => {
  switch (action.type) {
    case AppearanceModeActionType.SWITCH_TO_LIGHT_MODE:
      return { title: AppearanceMode.light, config: lightModeConfig };
    case AppearanceModeActionType.SWITCH_TO_DARK_MODE:
      return { title: AppearanceMode.dark, config: darkModeConfig };
    default:
      return state;
  }
};
