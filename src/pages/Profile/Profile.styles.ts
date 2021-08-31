import styled from "styled-components";
import { useProportions } from "../../hooks/windowProportions.hook";

const { wFullHD, hFullHD } = useProportions();

export const Wrapper = styled.div`
  height: calc(970vh * ${hFullHD});
  background-color: ${(props) => props.theme.additionalBGColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  font-size: 25px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(1015vw * ${wFullHD});
  padding: 48px 0px;
  border-radius: 35px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  font-size: 25px;
  box-shadow: 0px 0px 10px rgba(25, 25, 25, 0.15);
`;

export const Line = styled.div`
  margin-bottom: 15px;
`;

export const LineWithAction = styled(Line)`
  cursor: pointer;
`;
