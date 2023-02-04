import React from 'react';
import { TextInput } from '../stories/SalmanInput.stories';

import { render } from '@testing-library/react';

describe('Input test', () => {
  it('renders', () => {
    const { baseElement } = render(<TextInput />);
    expect(baseElement).toMatchSnapshot();
  });

  //   it('renders without crashing', () => {
  //     const div = document.createElement('div');
  //     ReactDOM.render(<TextInput />, div);
  //     ReactDOM.unmountComponentAtNode(div);
  //   });
  //   it('renders without crashing', () => {
  //     const div = document.createElement('div');
  //     ReactDOM.render(<PasswordInput />, div);
  //     ReactDOM.unmountComponentAtNode(div);
  //   });
  //   it('renders without crashing', () => {
  //     const div = document.createElement('div');
  //     ReactDOM.render(<FileInput />, div);
  //     ReactDOM.unmountComponentAtNode(div);
  //   });
});
