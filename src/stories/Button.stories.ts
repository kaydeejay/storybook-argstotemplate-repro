import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import Button from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
    template: `<storybook-button ${argsToTemplate(args)}></storybook-button>`
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Spacing: StoryObj<Button> = {
  render: (props) => ({
    props,
    template: `
        <p>Minimimum recommend gap is 1rem</p>
        <div style="display: flex; gap: 1rem;">
          <storybook-button [label]="label" [size]="size" [primary]="primary" (onClick)="onClick($event)"></storybook-button>
          <storybook-button [label]="label" [size]="size" [primary]="primary" (onClick)="onClick($event)"></storybook-button>
        </div>
      `,
  }),
};