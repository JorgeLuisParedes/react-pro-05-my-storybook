import type { Meta, StoryObj } from '@storybook/react-vite';

import { MyLabel } from '../components/MyLabel';

const meta = {
	title: 'UI/labels/MyLabel',
	component: MyLabel,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: { control: 'inline-radio' },
	},
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		label: 'Basic label',
		fontColor: '#de4d30',
		size: 'normal',
	},
};

export const AllCaps: Story = {
	args: {
		label: 'All Caps label',
		AllCaps: true,
	},
};

export const Secondary: Story = {
	args: {
		label: 'Secondary label',
		color: 'text-secondary',
	},
};

export const CustomColor: Story = {
	args: {
		label: 'Custom Color label',
		fontColor: '#2a2faf',
	},
};

export const CustomBackgroundColor: Story = {
	args: {
		label: 'Custom Color label',
		fontColor: 'white',
		backgroundColor: 'black',
	},
};
