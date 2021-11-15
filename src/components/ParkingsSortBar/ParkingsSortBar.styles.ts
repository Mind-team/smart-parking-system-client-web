import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 928px;
  background-color: ${(props) => props.theme.widgetBackground};
  border-radius: 19px;
  box-shadow: inset 0 0 0 2px rgba(1, 1, 1, 0.15),
    inset 0 0 0 4px rgba(136, 109, 236, 0.68), 0 0 28px 0 rgba(0, 0, 0, 0.08);
`;

export const Text = styled.span`
  cursor: pointer;
  font-size: 21px;
  color: ${(props) => props.theme.plainText};
  font-weight: 400;
  margin-left: 25px;
  margin-right: 25px;
`;
