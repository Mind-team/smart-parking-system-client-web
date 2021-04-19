import styled from "styled-components";

const widthRate = 100 / 375;
const heightRate = 100 / 812;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const Logo = styled.img`
  display: block;
  align-self: center;
  width: calc(30% * ${widthRate});
  height: calc(30% * ${heightRate});
  margin-top: calc(49vh * ${heightRate});
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: calc(68vh * ${heightRate});
  width: calc(299vw * ${widthRate});
  height: calc(222vh * ${heightRate});
  margin-bottom: calc(170vh * ${heightRate});
`;

export const FormTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.textColor};
`;

export const FormSubtitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: ${props => props.theme.actionColor};
  margin-top: 15px;
  cursor: pointer;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-top: calc(46vh * ${heightRate});
`;

