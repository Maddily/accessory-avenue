import * as React from 'react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import CartContent from './CartContent';
import useLoading from '../../../../hooks/useLoading';
import CartFooter from '../CartFooter/CartFooter';
import SkeletonCart from '../SkeletonCart/SkeletonCart';

vi.mock('../CartItem/CartItem', () => ({
  __esModule: true,
  default: vi.fn(() => <tr data-testid="cart-item"></tr>),
}));

vi.mock('../CartFooter/CartFooter');
CartFooter.mockImplementation(() => <div data-testid="cart-footer"></div>);

vi.mock('../../../../hooks/useLoading', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('../SkeletonCart/SkeletonCart');
SkeletonCart.mockImplementation(() => <div data-testid="skeleton"></div>);

vi.mock('react-router-dom', () => ({
  Link: vi.fn(({ to, children }) => <a href={to}>{children}</a>),
}));

vi.mock('react', async (importOriginal) => {
  const actualReact = await importOriginal();
  return {
    ...actualReact,
    useContext: () => [
      { id: 1, name: 'product1' },
      { id: 2, name: 'product2' },
    ],
  };
});

describe('CartContent', () => {
  beforeEach(() => {
    vi.mocked(useLoading).mockReturnValue({
      loading: false,
    });

    render(<CartContent />);
  });

  it('renders skeleton UI', () => {
    vi.mocked(useLoading).mockReturnValueOnce({
      loading: true,
    });

    render(<CartContent />);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });

  it('does not render skeleton UI when loading is false', () => {
    render(<CartContent />);

    const skeleton = screen.queryByTestId('skeleton');
    expect(skeleton).toBeNull();
  });

  it('renders an appropriate message and home link when there are no products in cart', () => {
    vi.spyOn(React, 'useContext').mockReturnValueOnce([]);
    cleanup();
    render(<CartContent />);

    const heading = screen.getByRole('heading', {
      name: /your cart is empty/i,
    });
    const homeLink = screen.getByRole('link', { name: /back to homepage/i });

    expect(heading).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders a heading', () => {
    const yourCartHeading = screen.getByRole('heading', { name: /your cart/i });

    expect(yourCartHeading).toBeInTheDocument();
  });

  it('renders headers for each column in the cart', () => {
    const productHeader = screen.getByRole('columnheader', {
      name: /product/i,
    });
    const quantityHeader = screen.getByRole('columnheader', {
      name: /quantity/i,
    });
    const totalHeader = screen.getAllByRole('columnheader', {
      name: /total/i,
    });

    expect(productHeader).toBeInTheDocument();
    expect(quantityHeader).toBeInTheDocument();
    expect(totalHeader.length).toEqual(2);
  });

  it('renders cart items', () => {
    const cartItems = screen.getAllByTestId('cart-item');

    expect(cartItems.length).toEqual(2);
  });

  it('renders a cart footer', () => {
    const cartFooter = screen.getByTestId('cart-footer');

    expect(cartFooter).toBeInTheDocument();
  });

  it('does not render a cart footer when there are no products added to the cart', () => {
    vi.spyOn(React, 'useContext').mockReturnValueOnce([]);
    cleanup();
    render(<CartContent />);

    const cartFooter = screen.queryByTestId('cart-footer');

    expect(cartFooter).toBeNull();
  });
});
