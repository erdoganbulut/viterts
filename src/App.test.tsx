import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('renders app works text', () => {
  render(<App />);
  const linkElement = screen.getByText(/App Works!/i);
  expect(linkElement).toBeInTheDocument();
});
