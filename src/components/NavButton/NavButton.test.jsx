import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavButton from './NavButton';

describe('NavButton', () => {
  it('renders a link with correct text', () => {
    render(
      <BrowserRouter>
        <NavButton value="shop" path="/" />
      </BrowserRouter>
    );
    expect(screen.getByRole('link').textContent).toMatch(/shop/i);
  });
});
