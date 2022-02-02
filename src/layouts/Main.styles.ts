import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
`;
