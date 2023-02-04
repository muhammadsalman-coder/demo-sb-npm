import 'react-app-polyfill/ie11';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { SalmanButton } from '../.';
import * as ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector<any>('#app')).render(
  <div>
    {' '}
    <SalmanButton />{' '}
  </div>
);
// root.render(<App />);
