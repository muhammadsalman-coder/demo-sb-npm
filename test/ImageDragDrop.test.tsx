import React from 'react';
import { Default as SalmanImageDragDrop } from '../stories/SalmanImageDragDrop.stories';

import { render } from '@testing-library/react';

describe('SalmanImageDragDrop test', () => {
  it('renders', () => {
    const { baseElement } = render(<SalmanImageDragDrop />);
    expect(baseElement).toMatchSnapshot();
  });
});
