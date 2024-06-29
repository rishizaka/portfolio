import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import Link from "next/link";

const meta = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click!!",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "default",
    outline: true,
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: "secondary",
    outline: true,
  },
};

export const LinkButton: Story = {
  args: {
    variant: "link",
    children: <a href="">This is Link!</a>,
    asChild: true,
  },
};
