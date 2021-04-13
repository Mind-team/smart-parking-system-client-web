import styled from "styled-components";

const widthRate = 100 / 1920;
const heightRate = 100 / 1080;

export const ButtonWrapper = styled.button`
  width: calc(175vw * ${widthRate});
  height: calc(80vh * ${heightRate});
  background: #61A0EA;
  border-radius: 14px;
  outline: none;
  border: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 41px;
  margin-top: calc(40vh * ${heightRate});
  display: flex;
  align-self: center;
  color: #ffffff;
  cursor: pointer;
  :hover {
    transition: 400ms;
    box-shadow: 0px 0px 15px ${props => props.theme.actionColor};
  }
`;

export const ButtonTitle = styled.span`
  display: flex;
  align-self: center;
  margin-left: calc(37vw * ${widthRate});
`;