import { FC } from "react";
import { User } from "../../common/User.dto";
import { Button } from "../../components/Button/Button";
import { Card, Line, LineWithAction, Wrapper } from "./Profile.styles";

interface Props {
  user: User;
  handleLogout: () => void;
  changeMode: () => void;
}

export const Profile: FC<Props> = ({ user, handleLogout, changeMode }) => {
  return (
    <Wrapper>
      <Card>
        <Line>Номер телефона: {user.phoneNumber}</Line>
        <Line>
          Регистрационный знак{user.plates.length > 1 ? "и" : ""}:{" "}
          {user.plates.map((value, index) =>
            index === user.plates.length - 1 ? `${value}` : `${value}, `,
          )}
        </Line>
        <LineWithAction onClick={changeMode}>Сменить тему</LineWithAction>
        <Button title="Выйти" onClick={handleLogout} />
      </Card>
    </Wrapper>
  );
};
