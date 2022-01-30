import { useHttp } from "../../http";
import { LoginDriverRequestDto } from "./dto/login-driver-request.dto";
import { useEndpoint } from "../endpoint.hook";
import { LoginDriverResponseDto } from "./dto/login-driver-response.dto";

const request = useHttp();
const endpoint = useEndpoint();

// function getCookie(name: string) {
//   const matches = document.cookie.match(
//     new RegExp(
//       "(?:^|; )" +
//         name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
//         "=([^;]*)",
//     ),
//   );
//   return matches ? decodeURIComponent(matches[1]) : undefined;
// }

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

export const useDriverApi = () => {
  return {
    login,
    sendConfirmationCode,
  };
};
