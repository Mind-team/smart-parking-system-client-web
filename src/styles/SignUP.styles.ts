import styled from "styled-components";

const widthRate = 100 / 1920;
const heightRate = 100 / 1080;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  height: 100%;
  flex-basis: calc(193vw * ${widthRate});
  background-color: #f6f6f6;
`;

export const MindLogo = styled.img`
  display: flex;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  width: calc(55vw * ${widthRate});
  height: calc(55vh * ${heightRate});
  margin-top: calc(30vh * ${heightRate});
`;

export const AppearanceModeIcon = styled.img`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  width: calc(49.62vw * ${widthRate});
  height: calc(56vh * ${heightRate});
  cursor: pointer;
  margin-bottom: 30px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  height: 100%;
  width: 100%;
  background-color: white;
  padding-top: 50pt;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: calc(651vw * ${widthRate});
  height: calc(623vh * ${heightRate});
`;

export const FormTitle = styled.p`
display: flex;
align-self: center;
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 56px;
font-weight: bold;
color: #393939;
`;

export const InputTitle = styled.p`
  transform: translate(20px,-10px);
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #393939;
`;

export const FormInputs = styled.div`
  display: flex;
  align-self: center;
  margin-top: calc(80vh * ${heightRate});
  width: calc(600vw * ${widthRate});
  flex-direction: column;
`;

export const FormInput = styled.input`
  display: flex;
  align-self: center;
  height: calc(76vh * ${heightRate}); 
  margin-bottom: calc(50vh * ${heightRate});
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.textColor};
  box-sizing: border-box;
  border-radius: 14px;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  cursor: pointer;
  padding-left: calc(25vw * ${widthRate});
  background-color: ${props => props.theme.backgroundColor};
  @media(max-width: 1790px) {
    font-size: 25px;
  }
  ::placeholder {
    color: ${props => props.theme.textColor};
  }
  :hover {
    transition: 400ms;
    border-color: ${props => props.theme.actionColor};
  }
`;