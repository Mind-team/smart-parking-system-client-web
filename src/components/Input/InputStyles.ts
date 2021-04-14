import styled from "styled-components";

const widthRate = 100 / 1920;
const heightRate = 100 / 1080;

interface Styles {
  height: string;
  paddingLeft: string;
  fontSize: string;
  fontSizeMobile: string;
}

export const InputWrapper = styled.input<Styles>`
  height: calc(${props => props.height} * ${heightRate}); 
  margin-bottom: calc(50vh * ${heightRate});
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.textColor};
  box-sizing: border-box;
  border-radius: 14px;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.fontSize};
  line-height: 41px;
  cursor: pointer;
  padding-left: calc(${props => props.paddingLeft} * ${widthRate});
  background-color: ${props => props.theme.backgroundColor};
  @media(max-width: 1790px) {
    font-size: ${props => props.fontSizeMobile};
  }
  ::placeholder {
    color: ${props => props.theme.textColor};
  }
  :hover {
    transition: 400ms;
    border-color: ${props => props.theme.actionColor};
  }
`;