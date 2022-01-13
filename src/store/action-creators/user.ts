import { Dispatch } from "react";
import { UserAction, UserActionType } from "../types/user";
import { GetDriverDataResponseDto } from "../../dto/driver/get-driver-data-response.dto";

const signInAPI = async (
  jwtToken: string,
): Promise<GetDriverDataResponseDto> => {
  const response = await fetch("http://localhost:5000/api/v4/driver", {
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtToken,
    },
  });
  return await response.json();
};

export const fetchUserData = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionType.FETCH_DATA });
      const jwtToken = localStorage.getItem("JwtToken");
      if (!jwtToken) {
        dispatch({ type: UserActionType.NOT_AUTHORIZED });
        return;
      }
      const res = await signInAPI(jwtToken);
      dispatch({
        type: UserActionType.FETCH_DATA_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({
        type: UserActionType.FETCH_DATA_ERROR,
        payload: "Some problems with the Internet",
      });
    }
  };
};

export const logout = () => {
  return (dispatch: Dispatch<UserAction>): void => {
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("password");
    dispatch({ type: UserActionType.LOGOUT });
  };
};

export const signIn = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionType.SIGN_IN });
      const [phoneNumber, password] = [
        localStorage.getItem("phoneNumber"),
        localStorage.getItem("password"),
      ];
      if (!phoneNumber || !password) {
        dispatch({
          type: UserActionType.SIGN_IN_ERROR,
          payload: "Fill the form",
        });
        return;
      }
      // const res = await signInAPI(phoneNumber, password);
      // if (!res.isExpected) {
      //   dispatch({ type: UserActionType.SIGN_IN_ERROR, payload: res.message });
      //   logout()(dispatch);
      //   return;
      // }
      // dispatch({
      //   type: UserActionType.SIGN_IN_SUCCESS,
      //   payload: res.value as User,
      // });
    } catch (error) {
      dispatch({
        type: UserActionType.SIGN_IN_ERROR,
        payload: "Some problems with the Internet",
      });
    }
  };
};

export const checkLocalStorage = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    dispatch({ type: UserActionType.CHECK_LOCAL_STORAGE });
    const [phoneNumber, password] = [
      localStorage.getItem("phoneNumber"),
      localStorage.getItem("password"),
    ];
    if (phoneNumber && password) {
      signIn()(dispatch);
      return;
    }
    dispatch({ type: UserActionType.EMPTY_LOCAL_STORAGE });
  };
};
