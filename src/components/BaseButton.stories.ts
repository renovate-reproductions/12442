import { Meta, Story } from "@storybook/vue";
import ButtonComponent from "./BaseButton.vue";

export default {
  title: "BaseButton",
  component: ButtonComponent,
  argTypes: {
    click: { action: "click" },
  },
} as Meta;

export const BaseButton: Story = (_, { argTypes }) => ({
  components: { ButtonComponent },
  template: '<ButtonComponent @click="click">Click me</ButtonComponent>',
  props: Object.keys(argTypes),
});
