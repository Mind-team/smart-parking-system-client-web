import { InfoWidget } from "../components/InfoWidget/InfoWidget";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "InfoWidget",
  component: InfoWidget,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof InfoWidget>;

const Template: ComponentStory<typeof InfoWidget> = (args) => (
  <InfoWidget {...args} />
);

export const InfoWidgetMini = Template.bind({});
export const InfoWidgetMedium = Template.bind({});

InfoWidgetMini.args = {
  size: "mini",
  content: "к510ат",
};

InfoWidgetMedium.args = {
  size: "medium",
  content: "VISA 8840",
};
