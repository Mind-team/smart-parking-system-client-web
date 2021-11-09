import styled from "styled-components";
import { useProportions } from "../../../hooks/windowProportions.hook";

const { wFullHD, hFullHD } = useProportions();

export const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  height: calc(110vh * ${hFullHD});
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(1060vw * ${wFullHD});
`;

export const NavbarElement = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
`;

export const NavLinkStyles = {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
};
