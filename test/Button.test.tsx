import React from 'react';
import { Default as Button } from '../stories/Button.stories';
import { render } from '@testing-library/react';

describe('Button test', () => {
  it('renders', () => {
    const { baseElement } = render(
      <Button onChange={console.log} color="primary" backgroundColor="red">
        Bitspro
      </Button>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
