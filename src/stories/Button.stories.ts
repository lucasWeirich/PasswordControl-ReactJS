import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button1',
    variant: "primary"
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button2',
    variant: "secondary"
  },
};

export const Danger: Story = {
  args: {
    label: 'Button Danger',
    variant: "danger"
  },
};

export const Alert: Story = {
  args: {
    label: 'Button Alert',
    variant: "alert"
  },
};