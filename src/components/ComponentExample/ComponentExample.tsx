import React from "react";

import { Title } from "./ComponentExampleStyles";

export interface ComponentExampleProps {
  text: string;
}

export const ComponentExample: React.FC<ComponentExampleProps> = ({
  text
}) => {
  return (
    <Title>{text}</Title>
  );
};