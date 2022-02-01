import { Navbar, NavbarElement, useTheme } from "@ermolaev/mind-ui";
import { Link } from "react-router-dom";
import { useRoute } from "../../hooks/routes";
import { FC, useContext } from "react";
import { LanguageContext } from "../../context/languages";

export const Navbar2: FC = () => {
  const route = useRoute();
  const dict = useContext(LanguageContext);
  const theme = useTheme();

  const LinkStyle = {
    textDecoration: "none",
    cursor: "pointer",
    color: theme.plainText,
  };

  return (
    <Navbar>
      <NavbarElement>
        <Link to={route.home.main} style={LinkStyle}>
          {dict.navbar.home}
        </Link>
      </NavbarElement>
      <NavbarElement>
        <Link to={route.history.main} style={LinkStyle}>
          {dict.navbar.history}
        </Link>
      </NavbarElement>
      <NavbarElement>
        <Link to={route.home.main} style={LinkStyle}>
          {dict.navbar.parkings}
        </Link>
      </NavbarElement>
      <NavbarElement>
        <Link to={route.home.main} style={LinkStyle}>
          {dict.navbar.profile}
        </Link>
      </NavbarElement>
    </Navbar>
  );
};
