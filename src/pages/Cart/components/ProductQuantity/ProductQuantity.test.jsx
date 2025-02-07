import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductQuantity from './ProductQuantity';
import useProductQuantity from './useProductQuantity';

vi.mock('./useProductQuantity');

describe('ProductQuantity', () => {
  let user, input, decrease, increase;

  const props = {
    id: 1,
    title: 'cable',
    updateQuantity: vi.fn(),
    productsInCart: [
      { id: 2, title: 'product2' },
      { id: 3, title: 'product3' },
    ],
    updateProductsInCart: vi.fn(),
    quantity: 1,
  };

  const useProductQuantityMock = {
    deleteProduct: vi.fn(),
  };

  beforeEach(() => {
    user = userEvent.setup();

    useProductQuantity.mockReturnValue(useProductQuantityMock);

    render(<ProductQuantity {...props} />);

    input = screen.getByLabelText('product quantity');
    decrease = screen.getByRole('button', { name: /decrease/ });
    increase = screen.getByRole('button', { name: /increase/ });
  });

  it('renders an input field to specify the quantity', () => {
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('1');
  });

  it('renders buttons to increase and decrease the quantity', () => {
    expect(decrease).toBeInTheDocument();
    expect(increase).toBeInTheDocument();
  });

  it('calls updateQuantity function when the decrease button is clicked', async () => {
    await user.click(decrease);

    expect(props.updateQuantity).toHaveBeenCalled();
  });

  it('calls updateQuantity function when the increase button is clicked', async () => {
    await user.click(increase);

    expect(props.updateQuantity).toHaveBeenCalled();
  });

  it('calls updateQuantity function when the input value is changed', async () => {
    await user.type(input, '5');

    expect(props.updateQuantity).toHaveBeenCalled();
  });

  it('calls deleteProduct when the delete button is clicked', async () => {
    const deleteButton = screen.getByRole('button', { name: /delete cable/i });

    expect(deleteButton).toBeInTheDocument();

    await user.click(deleteButton);

    expect(useProductQuantityMock.deleteProduct).toHaveBeenCalled();
  });
});
