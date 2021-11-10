import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
`;

export const DownWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const DownAgainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
