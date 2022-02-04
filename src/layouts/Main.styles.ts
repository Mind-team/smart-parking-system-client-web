import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Wrapper = styled.div`
  flex-grow: 1;
  background-color: ${(props) => props.theme.background};
`;
