import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SalmanTabs, ItemInterface } from '../src/SalmanTabs';
import HomeIcon from '@mui/icons-material/Home';
const meta: Meta = {
  title: 'Tabs',
  component: SalmanTabs,
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

const Template: Story<ItemInterface> = args => (
  <SalmanTabs
    item={[
      { text: 'Home', icon: <HomeIcon /> },
      { text: 'About', icon: <HomeIcon /> },
      { text: 'Contact', icon: <HomeIcon /> },
      { text: 'Home', icon: <HomeIcon /> },
      { text: 'About', icon: <HomeIcon /> },
      { text: 'Contact', icon: <HomeIcon /> },
      { text: 'Home', icon: <HomeIcon /> },
      { text: 'About', icon: <HomeIcon /> },
      { text: 'Contact', icon: <HomeIcon /> },
      { text: 'Home', icon: <HomeIcon /> },
      { text: 'About', icon: <HomeIcon /> },
      { text: 'Contact', icon: <HomeIcon /> },
    ]}
    {...args}
  />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  iconSize: '16px',
  fontSize: '18px',
  maxWidth: '500px',
  activeUnderline: true,
  activecolor: '#353840',
  iconColor: '#707a83',
  color: '#707a83',
  scrollThumbColor: '#707a83',
  item: [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'About', icon: <HomeIcon /> },
    { text: 'Contact', icon: <HomeIcon /> },
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'About', icon: <HomeIcon /> },
    { text: 'Contact', icon: <HomeIcon /> },
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'About', icon: <HomeIcon /> },
    { text: 'Contact', icon: <HomeIcon /> },
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'About', icon: <HomeIcon /> },
    { text: 'Contact', icon: <HomeIcon /> },
  ],
};
