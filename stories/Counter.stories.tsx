import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SalmanCounter, SalmanPropsInterface } from '../src/SalmanCounter';
const meta: Meta = {
  title: 'Counter',
  component: SalmanCounter,
  argTypes: {
    onchange: { action: 'onchange' },
  },
};
// argTypes: {
//   children: {
//     control: {
//       type: 'text',
//     },
//   },
// },
// parameters: {
//   controls: { expanded: true },
// },

export default meta;

const Template: Story<SalmanPropsInterface> = args => (
  <SalmanCounter {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({
  children: <></>,
});

Default.args = {
  yourName: 'Shan',
};
