import { UserRecord } from "../../common/UserRecord.interface";

interface UserState {
  user: UserRecord | null;
  isLoading: boolean;
  isError: [false] | [true, string];
}

const defaultState: UserState = {
  user: null,
  isLoading: true,
  isError: [false],
};

export enum UserActionType {
  "FETCH_DATA",
  "FETCH_DATA_SUCCESS",
  "FETCH_DATA_ERROR",
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

export type UserAction =
  | FetchUserAction
  | SuccessFetchUserAction
  | ErrorFetchUserAction;

export const userReducer = (
  state = defaultState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_DATA:
      return { user: null, isLoading: true, isError: [false] };
    case UserActionType.FETCH_DATA_SUCCESS:
      return { user: action.payload, isLoading: false, isError: [false] };
    case UserActionType.FETCH_DATA_ERROR:
      return { user: null, isLoading: false, isError: [true, action.payload] };
    default:
      return state;
  }
};
