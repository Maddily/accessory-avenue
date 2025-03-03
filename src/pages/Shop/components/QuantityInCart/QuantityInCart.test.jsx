import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuantityInCart from './QuantityInCart';

vi.mock('react', async (importOriginal) => {
  const actualReact = await importOriginal();
  return {
    ...actualReact,
    useContext: () => [
      { id: 1, name: 'product1', quantity: 5 },
      { id: 2, name: 'product2', quantity: 2 },
    ],
  };
});

describe('QuantityInCart', () => {
  const props = {
    id: 1,
    removeFromCart: vi.fn(),
  };

  it('Displays the quantity added to cart when quantityInCart is above 0', () => {
    render(<QuantityInCart {...props} />);

    const quantityInCart = screen.getByRole('paragraph', {
      name: 'quantity in cart',
    });

    expect(quantityInCart.textContent).toMatch(/5 in cart/);
  });

  it('does not render anything when the product is not in the cart', () => {
    render(<QuantityInCart />);

    const quantityInCart = screen.queryByRole('paragraph', {
      name: 'quantity in cart',
    });

    expect(quantityInCart).toBeNull();
  });

  it('calls removeFromCart function when the remove button is clicked', async () => {
    const user = userEvent.setup();

    render(<QuantityInCart {...props} />);

    const remove = screen.getByRole('button', { name: /remove/i });

    expect(remove).toBeInTheDocument();

    await user.click(remove);

    expect(props.removeFromCart).toHaveBeenCalledWith(props.id);
  });
});
