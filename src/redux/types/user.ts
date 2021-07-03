import { UserRecord } from "../../common/UserRecord.interface";

type Error = string;

export interface UserState {
  user: UserRecord | null;
  isLoading: boolean;
  isError: [false] | [true, Error];
  isAuth: boolean;
}

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
