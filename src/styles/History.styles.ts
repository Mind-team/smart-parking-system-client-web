import styled from "styled-components";
import { useProportions } from "../hooks/windowProportions.hook";

const { hFullHD } = useProportions();

export const Wrapper = styled.div`
  background-color: ${props => props.theme.additionalBGColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WidgetWrapper = styled.div`
  padding: calc(55vh * ${hFullHD});
`;