import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export default meta;
