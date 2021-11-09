import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RulesBlock } from "../components/RulesBlock/RulesBlock";

export default {
  title: "Rules Block",
  component: RulesBlock,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof RulesBlock>;

const Template: ComponentStory<typeof RulesBlock> = () => <RulesBlock />;

export const Primary = Template.bind({});

Primary.args = {};
