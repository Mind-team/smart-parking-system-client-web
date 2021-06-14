import styled from "styled-components";
import { useProportions } from "../../hooks/windowProportions.hook";

const { hFullHD } = useProportions();

export const Wrapper = styled.div`
  background-color: ${props => props.theme.additionalBGColor};
  height: calc(970vh * ${hFullHD});
  display: flex;
  align-items: center;
  justify-content: center;
`;