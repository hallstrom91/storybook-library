import { Meta, StoryObj } from "@storybook/react";
import ProfileDetails from "./ProfileDetails";

const meta: Meta<typeof ProfileDetails> = {
  title: "Components/ProfileDetails",
  component: ProfileDetails,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ProfileDetails>;

export const Default: Story = {
  args: {
    title: "Work Title",
    email: "Your@email.com",
    location: "City, Country",
  },
};

export const Test: Story = {
  args: {
    title: "Frontend developer",
    email: "tester@test.se",
    location: "Home, Earth",
    bg1: "#ffffff",
    bg2: "#666666",
    icon: "#123456",
  },
};
