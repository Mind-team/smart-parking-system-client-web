import { Dispatch } from "react";
import { UserRecord } from "../../common/UserRecord.interface";
import { UserAction, UserActionType } from "../reducers/userReducer";
import { ServerResponse } from "../../common/ServerResponse.interface";

export const fetchUserData = () => {
  return async(dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionType.FETCH_DATA });
      const [phoneNumber, password] = [
        localStorage.getItem("phoneNumber"),
        localStorage.getItem("password"),
      ];
      if (!phoneNumber || !password) {
        dispatch({ type: UserActionType.NOT_AUTHORIZED });
        return;
      }
      const body = JSON.stringify({
        phoneNumber,
        password,
      });
      const response = await fetch("http://localhost:5000/user/signIn", {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res: ServerResponse<UserRecord> = await response.json();
      dispatch({
        type: UserActionType.FETCH_DATA_SUCCESS,
        payload: res.value as UserRecord,
      });
    } catch (error) {
      dispatch({
        type: UserActionType.FETCH_DATA_ERROR,
        payload: "Some problems with the Internet",
      });
    }
  };
};
