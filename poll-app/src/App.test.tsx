import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders widget name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Take a Poll/i);
  expect(linkElement).toBeInTheDocument();
});