import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import useProduct from '../../../../hooks/useProduct';
import ProductQuantity from '../ProductQuantity/ProductQuantity';

vi.mock('../../../../hooks/useProduct');
vi.mock('../ProductQuantity/ProductQuantity');

ProductQuantity.mockImplementation(() => (
  <div data-testid="product quantity"></div>
));

describe('CartItem', () => {
  const productInCart = {
    id: 1,
    imageUrl: 'url',
    title: 'cable',
    price: 5,
    quantity: 2,
  };

  const useProductMock = {
    quantity: 2,
    updateQuantity: vi.fn(),
  };

  beforeEach(() => {
    useProduct.mockReturnValue(useProductMock);

    render(<CartItem productInCart={productInCart} />);
  });

  it('renders the image of the product', () => {
    const image = screen.getByRole('img', { name: /cable/i });

    expect(image).toBeInTheDocument();
  });

  it('renders the title of the product', () => {
    const title = screen.getByRole('heading', { name: /cable/i });

    expect(title).toBeInTheDocument();
  });

  it('renders the price of the product', () => {
    const price = screen.getByRole('paragraph', { name: /product price/i });

    expect(price).toBeInTheDocument();
  });

  it('renders the total price', () => {
    const total = screen.getAllByRole('cell', { name: /total price/i });

    expect(total.length).toEqual(2);
    expect(total[0].textContent).toMatch(/10/);
  });

  it('renders product quantity', () => {
    const productQuantity = screen.getByTestId('product quantity');

    expect(productQuantity).toBeInTheDocument();
  });
});
