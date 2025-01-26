import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
  });

  it('renders 404 heading', () => {
    const heading = screen.getByRole('heading', { name: '404' });

    expect(heading).toBeInTheDocument();
  });

  it('renders error text', () => {
    const text = screen.getByRole('paragraph');

    expect(text).toBeInTheDocument();
  });

  it('renders a link to home page', () => {
    const homeLink = screen.getByRole('link');

    expect(homeLink).toHaveAttribute('href', '/');
  });
});
