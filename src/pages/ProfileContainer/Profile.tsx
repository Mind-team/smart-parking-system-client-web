import { FC } from "react";
import { UserRecord } from "../../common/UserRecord.interface";
import { Button } from "../../components/Button/Button";
import { Card, Line, Wrapper } from "./Profile.styles";

interface Props {
  user: UserRecord;
  handleLogout: () => void;
  changeMode: () => void;
}

export const Profile: FC<Props> = ({ user, handleLogout, changeMode }) => {
  return (
    <Wrapper>
      <Card>
        <Line>Номер телефона: {user.phoneNumber.value}</Line>
        <Line>
          Регистрационный знак: {user.plates.map((plate) => plate.value)}
        </Line>
        <Line onClick={changeMode}>Сменить тему</Line>
        <Button title="Выйти" onClick={handleLogout} />
      </Card>
    </Wrapper>
  );
};
