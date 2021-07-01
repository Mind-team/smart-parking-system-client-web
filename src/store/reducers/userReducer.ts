import { UserRecord } from "../../common/UserRecord.interface";

type Error = string;

interface UserState {
  user: UserRecord | null;
  isLoading: boolean;
  isError: [false] | [true, Error];
  isAuth: boolean;
}

const defaultState: UserState = {
  user: null,
  isLoading: true,
  isError: [false],
  isAuth: false,
};

export enum UserActionType {
  FETCH_DATA = "FETCH_DATA",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
  NOT_AUTHORIZED = "NOT_AUTHORIZED",
  LOGOUT = "LOGOUT",
  SIGN_IN = "SIGN_IN",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_ERROR = "SIGN_IN_ERROR",
  CHECK_LOCAL_STORAGE = "CHECK_LOCAL_STORAGE",
  EMPTY_LOCAL_STORAGE = "EMPTY_LOCAL_STORAGE",
}

interface FetchUserAction {
  type: UserActionType.FETCH_DATA;
}

interface SuccessFetchUserAction {
  type: UserActionType.FETCH_DATA_SUCCESS;
  payload: UserRecord;
}

interface ErrorFetchUserAction {
  type: UserActionType.FETCH_DATA_ERROR;
  payload: Error;
}

interface NotAuthorizedUserAction {
  type: UserActionType.NOT_AUTHORIZED;
}

interface LogoutUserAction {
  type: UserActionType.LOGOUT;
}

interface SignInUserAction {
  type: UserActionType.SIGN_IN;
}

interface SuccessSignInUserAction {
  type: UserActionType.SIGN_IN_SUCCESS;
  payload: UserRecord;
}

interface ErrorSignInUserAction {
  type: UserActionType.SIGN_IN_ERROR;
  payload: Error;
}

interface CheckLocalStorageUserAction {
  type: UserActionType.CHECK_LOCAL_STORAGE;
}

interface EmptyLocalStorageUserAction {
  type: UserActionType.EMPTY_LOCAL_STORAGE;
}

export type UserAction =
  | FetchUserAction
  | SuccessFetchUserAction
  | ErrorFetchUserAction
  | NotAuthorizedUserAction
  | LogoutUserAction
  | SignInUserAction
  | SuccessSignInUserAction
  | ErrorSignInUserAction
  | CheckLocalStorageUserAction
  | EmptyLocalStorageUserAction;

export const userReducer = (
  state = defaultState,
  action: UserAction
): UserState => {
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
