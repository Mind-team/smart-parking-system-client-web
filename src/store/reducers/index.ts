import { combineReducers } from "redux";
import { appearanceModeReducer } from "./appearanceModeReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  appearanceMode: appearanceModeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
