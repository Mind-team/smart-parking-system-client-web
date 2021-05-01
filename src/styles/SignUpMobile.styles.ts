import styled from "styled-components";

const widthRate = 100 / 375;
const heightRate = 100 / 812;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

export const MindLogo = styled.img`
  width: calc(30vw * ${widthRate});
  height: calc(30vh * ${heightRate});
  margin-top: calc(49vh * ${heightRate});
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.textColor};
  margin-top: calc(54vh * ${heightRate});
`;

export const Inputs = styled.div`
  display: flex;  
  flex-direction: column;
  justify-self: center;
  margin-top: calc(52vh * ${heightRate});
`;

export const InputTitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  align-items: center;
  color: ${props => props.theme.textColor};;
  margin-bottom: calc(10vh * ${heightRate});
  margin-left: calc(19vw * ${widthRate});
`;

export const AppearanceModeIcon = styled.img`
  display: flex;
  width: calc(25vw * ${widthRate});
  height: calc(25vh * ${heightRate});
  cursor: pointer;
  align-self: center;
  margin-top: calc(90vh * ${heightRate});
`;