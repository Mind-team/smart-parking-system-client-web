import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { UserInfoWidgetMini } from "../components/UserInfoWidgetMini/UserInfoWidgetMini";

export default {
  title: "User info widget mini",
  component: UserInfoWidgetMini,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof UserInfoWidgetMini>;

const Template: ComponentStory<typeof UserInfoWidgetMini> = (args) => (
  <UserInfoWidgetMini {...args} />
);

export const CardWidget = Template.bind({});

CardWidget.args = {
  leftSideText: "Ваша карта:",
  rightSideText: "8840",
};

export const PlateWidget = Template.bind({});

PlateWidget.args = {
  leftSideText: "Ваш номер:",
  rightSideText: "к510ат",
};
