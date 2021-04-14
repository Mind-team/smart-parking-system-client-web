import styled from "styled-components";

const widthRate = 100 / 1920;
const heightRate = 100 / 1080;

export const InputWrapper = styled.input`
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