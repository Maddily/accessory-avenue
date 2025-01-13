import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe('Cart', () => {
  let cartLink;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Cart path="cart" />
      </BrowserRouter>
    );

    cartLink = screen.getByRole('link', { name: 'cart' });
  });

  it('renders a link that redirects to the correct path', async () => {
    const user = userEvent.setup();

    await user.click(cartLink);

    expect(window.location.href).toMatch(/cart/);
  });

  it('renders the number of items in the cart', () => {
    const numberOfItems = screen.getByRole('generic', {
      name: 'number of items in cart',
    });

    expect(cartLink).toContainElement(numberOfItems);
  });
});
