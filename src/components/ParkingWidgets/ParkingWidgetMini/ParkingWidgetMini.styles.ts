import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 434px;
  height: 302px;
  background-color: ${(props) => props.theme.widgetBackground};
  border-radius: 29px;
  box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.08);
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  margin-top: 20px;
  width: 317px;
  display: flex;
  justify-content: space-between;
  font-size: 21px;
  color: ${(props) => props.theme.plainText};
`;

export const TitleWrapperUnfilled = styled.div`
  margin-top: 20px;
  width: 317px;
  display: flex;
  justify-content: center;
  font-size: 21px;
  color: ${(props) => props.theme.plainText};
`;

export const Sum = styled.div`
  font-size: 56px;
  color: ${(props) => props.theme.plainText};
  font-weight: 400;
`;

export const Details = styled.div`
  font-size: 21px;
  color: ${(props) => props.theme.accent};
  font-weight: 400;
  margin-bottom: 47px;
  cursor: pointer;
`;
