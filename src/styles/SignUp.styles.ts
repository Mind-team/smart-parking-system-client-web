import styled from "styled-components";

const widthRate = 100 / 1920;
const heightRate = 100 / 1080;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: calc(193vw * ${widthRate});
  height: 100%;
  background-color: #f6f6f6;
`;

export const MindLogo = styled.img`
  width: calc(55vw * ${widthRate});
  height: calc(55vh * ${heightRate});
  margin-top: calc(56vh * ${heightRate});
`;

export const AppearanceModeIcon = styled.img`
  width: calc(49.62vw * ${widthRate});
  height: calc(56vh * ${heightRate});
  cursor: pointer;
  margin-bottom: calc(56vh * ${heightRate});
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  margin-top: calc(70vh * ${heightRate});
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: calc(651vw * ${widthRate});
  height: calc(782vh * ${heightRate});
`;

export const FormTitle = styled.p`
display: flex;
align-self: center;
font-size: 35px;
font-weight: 700;
color: #393939;
`;

export const InputTitle = styled.p`
  font-weight: 300;
  font-size: 30px;
  align-items: center;
  color: #393939;
  margin-bottom: calc(23vh * ${heightRate});
  margin-left: calc(26vw * ${widthRate});
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
