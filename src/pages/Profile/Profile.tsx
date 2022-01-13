import { FC } from "react";
import { Button } from "../../components/Button/Button";
import { Card, Line, LineWithAction, Wrapper } from "./Profile.styles";
import { GetDriverDataResponseDto } from "../../dto/driver/get-driver-data-response.dto";

interface Props {
  user: GetDriverDataResponseDto;
  handleLogout: () => void;
  changeMode: () => void;
}

export const Profile: FC<Props> = ({ user, changeMode, handleLogout }) => {
  return (
    <Wrapper>
      <Card>
        <Line>Номер телефона: {user.phoneNumber}</Line>
        <Line>
          Регистрационный знак{user.carPlates.length > 1 ? "и" : ""}:{" "}
          {user.carPlates.map((value, index) =>
            index === user.carPlates.length - 1 ? `${value}` : `${value}, `,
          )}
        </Line>
        <LineWithAction onClick={changeMode}>Сменить тему</LineWithAction>
        <Button title="Выйти" onClick={handleLogout} />
      </Card>
    </Wrapper>
  );
};
