import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 434px;
  height: 136px;
  background-color: ${(props) => props.theme.widgetBackground};
  border-radius: 29px;
  box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.08);
`;

export const LeftSide = styled.div`
  font-size: 21px;
  color: ${(props) => props.theme.plainText};
  font-weight: 400;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 59px;
  border-radius: 9px;
  background-image: linear-gradient(243deg, #886dec 100%, #56439e 0%);
`;

export const RightSideInnerText = styled.span`
  font-size: 21px;
  color: #ffffff;
  font-weight: 400;
`;
