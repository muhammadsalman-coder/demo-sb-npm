import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SalmanInput, SalmanInputInterface } from '../src/SalmanInput';
const meta: Meta = {
  title: 'Input',
  component: SalmanInput,
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

const Template: Story<SalmanInputInterface | any> = args => (
  <SalmanInput {...args} onChange={console.log} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  borderRadius: '20px',
  type: 'text',
  placeholder: 'enter name',
  padding: '10px',
  width: '100%',
};
export const TextInput = Template.bind({});
TextInput.args = {
  borderRadius: '20px',
  type: 'text',
  placeholder: 'enter name',
  padding: '10px',
  width: '100%',
};
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  borderRadius: '20px',
  type: 'password',
  placeholder: 'enter password',
  padding: '10px',
  width: '100%',
};
export const FileInput = Template.bind({});
FileInput.args = {
  borderRadius: '20px',
  type: 'file',
  placeholder: 'enter password',
  padding: '10px 10px 10px 35px',
  width: 'fit-content',
};
