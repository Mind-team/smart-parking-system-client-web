import { Reducer } from "redux";
import { UserAction, UserActionType, UserState } from "../types/user";

const defaultState: UserState = {
  user: null,
  isLoading: true,
  isError: [false],
  isAuth: false,
};

export const userReducer: Reducer<UserState> = (
  state = defaultState,
  action: UserAction
) => {
  switch (action.type) {
    case UserActionType.CHECK_LOCAL_STORAGE:
    case UserActionType.EMPTY_LOCAL_STORAGE:
    case UserActionType.LOGOUT:
      return { user: null, isLoading: false, isError: [false], isAuth: false };
    case UserActionType.FETCH_DATA:
      return { user: null, isLoading: true, isError: [false], isAuth: true };
    case UserActionType.SIGN_IN:
      return { user: null, isLoading: true, isError: [false], isAuth: false };
    case UserActionType.FETCH_DATA_SUCCESS:
    case UserActionType.SIGN_IN_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        isError: [false],
        isAuth: true,
      };
    case UserActionType.FETCH_DATA_ERROR:
      return {
        user: null,
        isLoading: false,
        isError: [true, action.payload],
        isAuth: true,
      };
    case UserActionType.SIGN_IN_ERROR:
      return {
        user: null,
        isLoading: false,
        isError: [true, action.payload],
        isAuth: false,
      };
    case UserActionType.NOT_AUTHORIZED:
      return {
        user: null,
        isLoading: false,
        isError: [true, "You are not auth"],
        isAuth: false,
      };
    default:
      return state;
  }
};
