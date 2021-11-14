import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ParkingWidgetStandard } from "../components/ParkingWidgets/ParkingWidgetStandard/ParkingWidgetStandard";

export default {
  title: "Parking Widget Standard",
  component: ParkingWidgetStandard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof ParkingWidgetStandard>;

const Template: ComponentStory<typeof ParkingWidgetStandard> = (args) => (
  <ParkingWidgetStandard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Гринвич",
  entryCarDate: "05.11.2021",
  price: 510,
  detailsRoute: "link",
};
