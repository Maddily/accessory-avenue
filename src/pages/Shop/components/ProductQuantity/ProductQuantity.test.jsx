import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductQuantity from './ProductQuantity';

describe('ProductQuantity', () => {
  let user, input, decrease, increase;

  const props = {
    id: 1,
    title: 'cable',
    updateQuantity: vi.fn(),
    quantity: 1,
  };

  beforeEach(() => {
    user = userEvent.setup();

    render(<ProductQuantity {...props} />);

    input = screen.getByLabelText('product quantity');
    decrease = screen.getByRole('button', { name: 'decrease' });
    increase = screen.getByRole('button', { name: 'increase' });
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
});
