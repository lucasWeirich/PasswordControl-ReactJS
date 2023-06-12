import type { Meta, StoryObj } from '@storybook/react';

import BarOptions from '../components/BarOptions/BarOptions';

const meta = {
  title: 'Components/BarOptions',
  component: BarOptions,
} satisfies Meta<typeof BarOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    idDelete: 0
  },
};