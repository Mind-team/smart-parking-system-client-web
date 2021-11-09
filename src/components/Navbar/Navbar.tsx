import * as S from "./Navbar.styles";
import { NavLink } from "react-router-dom";
import { Link } from "./Navbar.styles";
import { useRoutes } from "../../hooks/routes.hook";

export const Navbar = () => {
  const routes = useRoutes();

  return (
    <S.Wrapper>
      <S.NavMenu>
        <S.List>
          <S.ListElement>
            <NavLink to={routes.home()} style={Link}>
              <S.Text>Главная</S.Text>
            </NavLink>
          </S.ListElement>
          <S.ListElement>
            <NavLink to={routes.history()} style={Link}>
              <S.Text>История</S.Text>
            </NavLink>
          </S.ListElement>
          <S.ListElement>
            <NavLink to={routes.parkings()} style={Link}>
              <S.Text>Парковки</S.Text>
            </NavLink>
          </S.ListElement>
          <S.ListElement>
            <NavLink to={routes.profile()} style={Link}>
              <S.Text>Профиль</S.Text>
            </NavLink>
          </S.ListElement>
        </S.List>
      </S.NavMenu>
    </S.Wrapper>
  );
};
