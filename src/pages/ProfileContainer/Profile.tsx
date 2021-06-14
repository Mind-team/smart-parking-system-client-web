import { FC } from "react";
import { UserRecord } from "../../common/UserRecord.interface";
import { Button } from "../../components/Button/Button";
import { Card, Line, Wrapper } from "./Profile.styles";

interface Props {
  user: UserRecord;
  handleLogout: () => void;
}

export const Profile: FC<Props> = ({ user, handleLogout }) => {
  return (
    <Wrapper>
      <Card>
        <Line>Номер телефона: {user.phoneNumber.value}</Line>
        <Line>
          Регистрационные знаки: {user.plates.map((plate) => plate.value)}
        </Line>
        <Button title="Выйти" onClick={handleLogout} />
      </Card>
    </Wrapper>
  );
};
