import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToCart from './AddToCart';
import useProduct from '../../../../hooks/useProduct';

vi.mock('../../../../hooks/useProduct');

vi.mock('react-router-dom', () => ({
  useOutletContext: vi.fn(() => [
    [
      { id: 1, name: 'product1' },
      { id: 2, name: 'product2' },
    ],
    vi.fn(),
  ]),
}));

describe('AddToCart', () => {
  const product = {
    id: 1,
    title: 'cable',
  };
  const useProductMock = {
    addToCartHandler: vi.fn(),
  };

  it('renders a button that, when clicked, adds its associated item to the cart', async () => {
    useProduct.mockReturnValue(useProductMock);

    const user = userEvent.setup();

    render(<AddToCart product={product} />);

    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeInTheDocument();

    await user.click(button);

    expect(useProductMock.addToCartHandler).toHaveBeenCalled();
  });
});
