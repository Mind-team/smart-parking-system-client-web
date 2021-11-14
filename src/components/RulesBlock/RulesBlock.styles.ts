import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 302px;
  width: 928px;
  background-color: ${(props) => props.theme.widgetBackground};
  border-radius: 29px;
  box-shadow: inset 0 0 0 2px rgba(1, 1, 1, 0.15),
    inset 0 0 0 4px rgba(136, 109, 236, 0.68), 0 0 28px 0 rgba(0, 0, 0, 0.08);
`;

export const RulesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 574px;
`;

export const LineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LineNumber = styled.span`
  font-size: 40px;
  color: ${(props) => props.theme.accent};
`;

export const LineDescription = styled.span`
  margin-left: 66px;
  font-size: 18px;
  padding-bottom: 12px;
  padding-top: 12px;
  color: ${(props) => props.theme.plainText};
`;
