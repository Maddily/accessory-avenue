import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from './Product';
import Stars from '../../../../components/Stars/Stars';

vi.mock('../../../../components/Stars/Stars');
Stars.mockImplementation(() => <div data-testid="stars"></div>);

describe('Product', () => {
  const props = {
    id: 1,
    imageUrl: 'url',
    title: 'cable',
    rating: 5,
    price: 10,
    productsInCart: [{ id: 2 }, { id: 3 }],
    updateProductsInCart: vi.fn(),
  };
  let user, input, increase, decrease, addToCartButton;

  beforeEach(() => {
    render(<Product {...props} />);

    user = userEvent.setup();

    input = screen.getByLabelText('product quantity');
    decrease = screen.getByRole('button', { name: 'decrease' });
    increase = screen.getByRole('button', { name: 'increase' });
    addToCartButton = screen.getByRole('button', { name: /add to cart/i });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the image of the product', () => {
    const image = screen.getByAltText('product image');

    expect(image).toBeInTheDocument();
  });

  it('renders the title of the product', () => {
    const title = screen.getByRole('heading', { name: 'cable' });

    expect(title).toBeInTheDocument();
  });

  it('renders rating as star presentation', () => {
    const starsRating = screen.getByTestId('stars');

    expect(starsRating).toBeInTheDocument();
  });

  it('renders rating as a number', () => {
    const rating = screen.getByText('5');

    expect(rating).toBeInTheDocument();
    expect(rating.textContent).toEqual('5');
  });

  it('renders the price of the product', () => {
    const price = screen.getByRole('paragraph', { name: 'price' });

    expect(price).toBeInTheDocument();
    expect(price.textContent).toEqual('$10');
  });

  it('renders an input field to specify the quantity', () => {
    expect(input).toBeInTheDocument();
  });

  it('does not decrease the quantity below 0 when a number below 0 is entered', () => {
    user.type(input, '-1');

    expect(input.value).toEqual('0');
  });

  it('renders buttons to increase and decrease the quantity', () => {
    expect(decrease).toBeInTheDocument();
    expect(increase).toBeInTheDocument();
  });

  it('does not decrease the quantity below 0 when the decrease button is clicked', async () => {
    expect(input.value).toEqual('0');

    await user.click(decrease);

    expect(input.value).toEqual('0');
  });

  it('decreases the quantity when the decrease button is clicked', async () => {
    await user.type(input, '5');
    await user.click(decrease);

    expect(input.value).toEqual('4');
  });

  it('increases the quantity when the increase button is clicked', async () => {
    await user.type(input, '5');
    await user.click(increase);

    expect(input.value).toEqual('6');
  });

  it('Resets the displayed quantity to zero when Add to cart button is clicked', async () => {
    await user.type(input, '5');
    expect(input.value).toEqual('5');

    await user.click(addToCartButton);
    expect(input.value).toEqual('0');
  });
});
