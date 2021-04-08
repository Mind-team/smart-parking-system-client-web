import React from "react";
import styled from "styled-components";

import { ComponentExample } from "../components/ComponentExample/ComponentExample";
import { ButtonRect } from "erck";

import "../styles/Home.styles.sass";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Home: React.FC = () => {
  return (
    <Wrapper>
      <ComponentExample text="React Components Kit" />
      <ButtonRect
        className="btn"
        title="Confirm"
        backgroundColor="#86CD67"
      />
    </Wrapper>
  );
};

