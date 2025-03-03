import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToCart from './AddToCart';

const dispatchCartActionMock = vi.fn();

vi.mock('react', async (importOriginal) => {
  const actualReact = await importOriginal();
  return {
    ...actualReact,
    useContext: () => dispatchCartActionMock,
  };
});

describe('AddToCart', () => {
  const product = {
    id: 1,
    title: 'cable',
  };

  it('renders a button that, when clicked, adds its associated item to the cart', async () => {
    const user = userEvent.setup();

    render(<AddToCart product={product} />);

    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeInTheDocument();

    await user.click(button);

    expect(dispatchCartActionMock).toHaveBeenCalledWith({
      type: 'add_featured_product_to_cart',
      product,
    });
  });
});
