import { Dispatch } from "react";
import {
  AppearanceMode,
  AppearanceModeAction,
  AppearanceModeActionType,
} from "../reducers/appearanceModeReducer";

export const toggleMode = () => {
  return (dispatch: Dispatch<AppearanceModeAction>): void => {
    const currentMode = localStorage.getItem("Mode");
    if (currentMode === AppearanceMode.light) {
      localStorage.setItem("Mode", AppearanceMode.dark);
      dispatch({ type: AppearanceModeActionType.SWITCH_TO_DARK_MODE });
      return;
    }
    localStorage.setItem("Mode", AppearanceMode.light);
    dispatch({ type: AppearanceModeActionType.SWITCH_TO_LIGHT_MODE });
  };
};

export const detectMode = () => {
  return (dispatch: Dispatch<AppearanceModeAction>): void => {
    const mode = localStorage.getItem("Mode");
    if (mode === AppearanceMode.light) {
      dispatch({ type: AppearanceModeActionType.SWITCH_TO_LIGHT_MODE });
      return;
    }
    dispatch({ type: AppearanceModeActionType.SWITCH_TO_DARK_MODE });
  };
};
