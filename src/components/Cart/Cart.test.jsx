import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe('Cart', () => {
  it('renders a link that redirects to the correct path', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Cart path="cart" />
      </BrowserRouter>
    );

    const cartLink = screen.getByRole('link', { name: 'cart' });

    await user.click(cartLink);

    expect(window.location.href).toMatch(/cart/);
  });

  it('renders the number of items in the cart', () => {
    render(
      <BrowserRouter>
        <Cart path="cart" />
      </BrowserRouter>
    );

    const cartLink = screen.getByRole('link', { name: 'cart' });
    const numberOfItems = screen.getByRole('generic', {
      name: 'number of items in cart',
    });

    expect(cartLink).toContainElement(numberOfItems);
  });
});
