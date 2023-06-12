import type { Meta, StoryObj } from '@storybook/react';

import InputSearch from '../components/InputSearch/InputSearch';

const meta = {
  title: 'Components/InputSearch',
  component: InputSearch,
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Search password',
    name: 'search_password'
  },
};