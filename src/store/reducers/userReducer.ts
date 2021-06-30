import { UserRecord } from "../../common/UserRecord.interface";

interface UserState {
  user: UserRecord | null;
  isLoading: boolean;
  isError: [false] | [true, string];
  isAuth: boolean;
}

const defaultState: UserState = {
  user: null,
  isLoading: true,
  isError: [false],
  isAuth: false,
};

export enum UserActionType {
  "FETCH_DATA",
  "FETCH_DATA_SUCCESS",
  "FETCH_DATA_ERROR",
  "NOT_AUTHORIZED",
  "LOGOUT",
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
  payload: string;
}

interface NotAuthorizedUserAction {
  type: UserActionType.NOT_AUTHORIZED;
}

interface LogoutUserAction {
  type: UserActionType.LOGOUT;
}

export type UserAction =
  | FetchUserAction
  | SuccessFetchUserAction
  | ErrorFetchUserAction
  | NotAuthorizedUserAction
  | LogoutUserAction

export const userReducer = (
  state = defaultState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_DATA:
      return { user: null, isLoading: true, isError: [false], isAuth: true };
    case UserActionType.FETCH_DATA_SUCCESS:
      return { user: action.payload, isLoading: false, isError: [false], isAuth: true };
    case UserActionType.FETCH_DATA_ERROR:
      return { user: null, isLoading: false, isError: [true, action.payload], isAuth: true };
    case UserActionType.NOT_AUTHORIZED:
      return { user: null, isLoading: false, isError: [true, "You are not auth"], isAuth: false };
    case UserActionType.LOGOUT:
      return { user: null, isLoading: false, isError: [false], isAuth: false };
    default:
      return state;
  }
};
