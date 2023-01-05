import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the heading component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Heading/i);
  expect(linkElement).toBeInTheDocument();
});
