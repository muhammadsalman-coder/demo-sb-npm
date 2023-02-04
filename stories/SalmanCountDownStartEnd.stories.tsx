import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SalmanCountDownStartEnd } from '../src/SalmanCountDownStartEnd';

const meta: Meta = {
  title: 'SalmanCountDownStartEnd',
  component: SalmanCountDownStartEnd,
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

const Template: Story<any> = args => <SalmanCountDownStartEnd {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  timerEndText: 'ended Timer',
  timerStartText: 'Start on: ',
  gap: 30,
  color: '#000',
  timeHeadinSize: '26px',
  timeTextSize: '16px',
  timerEndSize: '16px',
};
