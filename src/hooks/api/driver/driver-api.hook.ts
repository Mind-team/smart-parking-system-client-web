import { useHttp } from "../../http";
import { LoginDriverRequestDto } from "./dto/login-driver-request.dto";
import { useEndpoint } from "../endpoint.hook";
import { LoginDriverResponseDto } from "./dto/login-driver-response.dto";
import { GetDriverResponseDto } from "./dto/get-driver-response.dto";

const request = useHttp();
const endpoint = useEndpoint();

const sendConfirmationCode = async (
  phoneNumber: LoginDriverRequestDto["phoneNumber"],
  apiVersion: string,
) => {
  return await request<
    Pick<LoginDriverRequestDto, "phoneNumber">,
    { error?: number; message?: string }
  >({
    url: endpoint + apiVersion + "/driver/send-confirmation-code",
    method: "POST",
    body: { phoneNumber },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const login = async (data: LoginDriverRequestDto, apiVersion: string) => {
  return await request<LoginDriverRequestDto, LoginDriverResponseDto>({
    url: endpoint + apiVersion + "/driver/login",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const driver = async (accessToken: string | null, apiVersion: string) => {
  if (!accessToken) {
    return null; // HANDLE
  }
  return await request<null, GetDriverResponseDto>({
    url: endpoint + apiVersion + "/driver",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const useDriverApi = () => {
  const accessToken = localStorage.getItem("at");
  return {
    login,
    sendConfirmationCode,
    driver: (apiVersion = "v4") => driver(accessToken, apiVersion),
  };
};
