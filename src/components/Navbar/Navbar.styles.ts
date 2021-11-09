import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 7.2916666667%;
  min-height: 56px;
  background-color: ${(props) => props.theme.header};
`;

export const NavMenu = styled.nav``;

export const List = styled.ul`
  margin: 0;
  padding: 17px 0;
  display: flex;
  justify-content: center;
`;

export const ListElement = styled.li`
  font-size: 18px;
  display: inline;
  padding: 0 33px;
`;

export const Link = {
  textDecoration: "none",
  cursor: "pointer",
};

export const Text = styled.span`
  color: ${(props) => props.theme.plainText};
  transition: 0.5s;
  &:hover {
    opacity: 50%;
  }
`;
