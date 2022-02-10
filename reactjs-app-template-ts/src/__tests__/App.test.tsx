import { render, screen } from '@testing-library/react';
import App from '../App';

describe('app', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Sample Component/i);
    expect(linkElement).toBeInTheDocument();
  });
});
