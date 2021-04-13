import styled from "styled-components";

const widthRate = 100 / 1920;
const heightRate = 100 / 1080;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-basis: calc(1043vw * ${widthRate});
  background-color: ${props => props.theme.additionalBGColor ?? props.theme.backgroundColor};
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-basis: calc(877vw * ${widthRate});
  background-color: ${props => props.theme.backgroundColor};
`;

export const MindLogo = styled.img`
  width: calc(55vw * ${widthRate});
  height: calc(55vh * ${heightRate});
  flex-basis: calc(198vh * ${heightRate});
  margin-left: calc(69vw * ${widthRate});
`;

export const Illustration = styled.img`
  width: calc(1006.63vw * ${widthRate});
  height: calc(881.93vh * ${heightRate});
  flex-basis: calc(882vh * ${heightRate});
`;

export const AppearanceModeIcon = styled.img`
  display: flex;
  width: calc(49.62vw * ${widthRate});
  height: calc(56vh * ${heightRate});
  flex-basis: calc(198vh * ${heightRate});
  margin-left: calc(752vw * ${widthRate});
  cursor: pointer;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: calc(651vw * ${widthRate});
  height: calc(623vh * ${heightRate});
`;

export const FormTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 45px;
  line-height: 56px;
  color: ${props => props.theme.textColor};
  @media(max-width: 1790px) {
    font-size: 30px;
  }
`;

export const FormSubtitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  color: ${props => props.theme.actionColor};
  margin-top: 15px;
  cursor: pointer;
  @media(max-width: 1790px) {
    font-size: 25px;
    margin-top: 0;
  }
`;

export const FormInputs = styled.div`
  margin-top: calc(80vh * ${heightRate});
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
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