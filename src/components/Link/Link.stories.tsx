import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";

const meta = {
  title: "Primitives/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    href: { control: "text" },
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: "/",
    children: "Link",
  },
};

export default meta;
