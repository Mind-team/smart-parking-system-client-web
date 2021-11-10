import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ParkingWidgetMini } from "../components/ParkingWidgetMini/ParkingWidgetMini";

export default {
  title: "Parking Widget Mini",
  component: ParkingWidgetMini,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof ParkingWidgetMini>;

const Template: ComponentStory<typeof ParkingWidgetMini> = (args) => (
  <ParkingWidgetMini {...args} />
);

export const Filled = Template.bind({});

Filled.args = {
  isFilled: true,
  data: {
    title: "Гринвич",
    entryCarDate: "05.11.2021",
    parkingTime: "1:50",
    price: 510,
    detailsRoute: "link",
  },
};

export const Unfilled = Template.bind({});

Unfilled.args = {
  isFilled: false,
  data: {
    price: 510,
    detailsRoute: "",
  },
};
