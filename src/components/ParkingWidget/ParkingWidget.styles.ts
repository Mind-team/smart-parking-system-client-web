import styled from "styled-components";
import { useProportions } from "../../hooks/windowProportions.hook";

const { wFullHD, hFullHD } = useProportions();

export const WidgetWrapper = styled.div`
  width: calc(1015vw * ${wFullHD});
  height: calc(300vh * ${hFullHD});
  border-radius: 35px;
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 0px 10px rgba(25, 25, 25, 0.15);
  flex-direction: column;
  justify-content: space-around;
`;

export const InfoLine = styled.div`
  display: flex;
  color: ${(props) => props.theme.textColor};
  justify-content: space-around;
  font-weight: normal;
  font-size: 25px;
  flex: 45 10 45;
`;

export const Price = styled.div`
  align-self: center;
  color: ${(props) => props.theme.textColor};
  font-weight: 500;
  font-size: 56px;
`;

export const Details = styled.div`
  align-self: center;
  color: ${(props) => props.theme.actionColor};
  font-size: 25px;
  cursor: pointer;
  padding-bottom: 12px;
`;

export const NavLinkStyles = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
};
