import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SalmanCountDownTimmer } from '../src/SalmanCountDownTimmer';

const meta: Meta = {
  title: 'SalmanCountDownTimmer',
  component: SalmanCountDownTimmer,
  argTypes: {
    endDateTime: { control: 'date' },
    startDateTime: { control: 'date' },
    color: { control: 'color' },
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

const Template: Story<any> = args => <SalmanCountDownTimmer {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  timerEndText: 'ended Timer',
  gap: 30,
  color: '#000',
  timeHeadinSize: '26px',
  timeTextSize: '16px',
  timerStartText: 'Timer Start on: ',
  timerStartSize: '16px',
  timerEndSize: '16px',
};
