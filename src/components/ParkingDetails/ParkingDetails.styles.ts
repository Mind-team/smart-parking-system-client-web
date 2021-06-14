import styled from "styled-components";
import { useProportions } from "../../hooks/windowProportions.hook";

const { wFullHD } = useProportions();

export const Wrapper = styled.div`
  width: calc(1015vw * ${wFullHD});
  padding: 48px 0px;
  border-radius: 35px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  font-size: 25px;
  box-shadow: 0px 0px 10px rgba(25, 25, 25, 0.15);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  margin-bottom: 15px;
`;