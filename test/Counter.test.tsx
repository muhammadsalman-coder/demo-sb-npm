import React from 'react';
import { Default as Counter } from '../stories/Counter.stories';

import { render } from '@testing-library/react';

describe('Counter test', () => {
  it('renders', () => {
    const { baseElement } = render(
      <Counter yourName="shan" onChange={() => {}} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
