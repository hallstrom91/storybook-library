import ProfileImage from "./ProfileImage";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileImage> = {
  title: "Components/ProfileImage",
  component: ProfileImage,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProfileImage>;

export const LightMode: Story = {
  args: {
    src: "/user-hand-up-svgrepo-com.png",
    alt: "Profile Picture",
    border: "#ADC6FF",
    bg1: "#E0E2E4",
    bg2: "#C6C8CA",
    shadow: "#4472CA",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const DarkMode: Story = {
  args: {
    src: "/user-hand-up-svgrepo-com.png",
    alt: "Profile Picture",
    border: "#A2B2EE",
    bg1: "#26292B",
    bg2: "#3C4348",
    shadow: "#5F7ADB",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};
