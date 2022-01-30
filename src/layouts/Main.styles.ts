import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100vh;
`;
