import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1015px;
  padding: 48px 0;
  border-radius: 35px;
  background-color: ${(props) => props.theme.widgetBackground};
  color: ${(props) => props.theme.plainText};
  font-size: 25px;
  box-shadow: 0 0 10px rgba(25, 25, 25, 0.15);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  margin-bottom: 15px;
`;
