import type { Meta, StoryObj } from '@storybook/react';

import SideBar from '../components/SideBar/SideBar';

const meta = {
  title: 'Components/SideBar',
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};