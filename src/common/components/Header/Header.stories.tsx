import { Header, HeaderProps } from "./index";
import { ComponentMeta, StoryObj } from "@storybook/react";

export default {
  title: "Common/Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default = {};

export const HiddenOptions: StoryObj<HeaderProps> = {
  args: {
    hiddenOptions: true,
  },
};
