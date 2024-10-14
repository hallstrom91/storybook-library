import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    bgColor: "#ffffff",
    textColor: "#000000",
    size: "medium",
    onClick: () => console.log("Primary Button Clicked!"),
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    bgColor: "#000000",
    textColor: "#ffffff",
    size: "medium",
    onClick: () => console.log("Primary Button Clicked!"),
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    bgColor: "#222222",
    textColor: "#ffffff",
    size: "small",
    onClick: () => console.log("Small Button Clicked!"),
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    bgColor: "#ffffff",
    textColor: "#222222",
    size: "large",
    onClick: () => console.log("Small Button Clicked!"),
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
