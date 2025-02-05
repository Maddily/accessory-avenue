import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe('Cart', () => {
  let cartLink;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Cart noOfProductsInCart={2} />
      </BrowserRouter>
    );

    cartLink = screen.getByRole('link', { name: /cart/ });
  });

  it('renders the cart link with the correct path', async () => {
    expect(cartLink).toHaveAttribute('href', '/cart');
  });

  it('renders the number of items in the cart', () => {
    const numberOfItems = screen.getByLabelText('number of items in cart');

    expect(cartLink).toContainElement(numberOfItems);
    expect(numberOfItems.textContent).toMatch(/2/);
  });
});
