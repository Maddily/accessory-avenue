import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import NavButton from './NavButton';

describe('NavButton', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavButton value="shop" path="/shop" />
      </BrowserRouter>
    );
  });

  it('renders a link with correct text', () => {
    expect(screen.getByRole('link').textContent).toMatch(/shop/i);
  });

  it('links to the correct page', async () => {
    const user = userEvent.setup();

    const shopButton = screen.getByRole('link', {
      name: /shop/i,
    });

    await user.click(shopButton);

    expect(window.location.href).toMatch(/\/shop/);
  });
});
