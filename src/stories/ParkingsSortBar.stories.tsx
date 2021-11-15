import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ParkingsSortBar } from "../components/ParkingsSortBar/ParkingsSortBar";

export default {
  title: "Parkings Sort Bar",
  component: ParkingsSortBar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof ParkingsSortBar>;

const Template: ComponentStory<typeof ParkingsSortBar> = (args) => (
  <ParkingsSortBar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  plates: ["к510ат", "и105ль"],
};
