import { Reducer } from "redux";
import { darkModeConfig, lightModeConfig } from "../../styles/ModeConfig";
import {
  AppearanceMode,
  AppearanceModeAction,
  AppearanceModeActionType,
  AppearanceModeState,
} from "../types/appearanceMode";

const defaultState: AppearanceModeState = {
  title: AppearanceMode.light,
  config: lightModeConfig,
};

export const appearanceModeReducer: Reducer<AppearanceModeState> = (
  state = defaultState,
  action: AppearanceModeAction,
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
