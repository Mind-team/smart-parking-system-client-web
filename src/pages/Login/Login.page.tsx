import { TextControl, Button } from "@ermolaev/mind-ui";
import { FC, useContext, useState } from "react";
import * as S from "./Login.styles";
import { LanguageContext } from "../../context/languages";

interface ILoginProps {
  onLoginClick: (phone: string, confirmationCode: string) => void;
  onSendCodeClick: (phone: string) => void;
  isError: boolean;
}

export const Login: FC<ILoginProps> = ({
  onLoginClick,
  onSendCodeClick,
  isError,
}) => {
  const dict = useContext(LanguageContext);
  const [phone, setPhone] = useState<string>("");
  const [code, setCode] = useState("");
  const [isCodeSend, setCodeSend] = useState(false);

  if (isError) {
    return <>Error</>;
  }

  const sendCodeHandler = () => {
    setCodeSend(true);
    onSendCodeClick(phone);
  };

  return (
    <S.Form>
      <TextControl
        type={"text"}
        placeholder={dict.pages.login.phoneNumber}
        valueChange={(value: string) => setPhone(value)}
      />
      {isCodeSend && (
        <TextControl
          type={"text"}
          placeholder={dict.pages.login.sendConfirmationCodePlaceholder}
          valueChange={(value: string) => setCode(value)}
        />
      )}
      <Button
        title={
          isCodeSend
            ? dict.pages.login.login
            : dict.pages.login.sendConfirmationCodeBtn
        }
        click={() =>
          isCodeSend ? onLoginClick(phone, code) : sendCodeHandler()
        }
      />
    </S.Form>
  );
};
