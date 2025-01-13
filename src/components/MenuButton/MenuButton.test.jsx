import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import MenuButton from './MenuButton';

describe('MenuButton', () => {
  it('renders a link with correct text', () => {
    render(
      <BrowserRouter>
        <MenuButton value="shop" path="/" />
      </BrowserRouter>
    );
    expect(screen.getByRole('link').textContent).toMatch(/shop/i);
  });

  it('links to the correct page', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <MenuButton value="shop" path="/shop" />
      </BrowserRouter>
    );

    const shopButton = screen.getByRole('link', {
      name: /shop/i,
    });

    await user.click(shopButton);

    expect(window.location.href).toMatch(/\/shop/);
  });
});
