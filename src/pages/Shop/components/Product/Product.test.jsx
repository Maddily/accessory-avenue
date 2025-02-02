import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from './Product';
import useProduct from './useProduct';
import Stars from '../../../../components/Stars/Stars';
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import QuantityInCart from '../QuantityInCart/QuantityInCart';

vi.mock('./useProduct');
vi.mock('../../../../components/Stars/Stars');
vi.mock('../ProductQuantity/ProductQuantity');
vi.mock('../QuantityInCart/QuantityInCart');

Stars.mockImplementation(() => <div data-testid="stars"></div>);

ProductQuantity.mockImplementation(() => (
  <div data-testid="product quantity"></div>
));

QuantityInCart.mockImplementation(() => (
  <div data-testid="quantity in cart"></div>
));

describe('Product', () => {
  let user;

  const props = {
    id: 1,
    imageUrl: 'url',
    title: 'cable',
    rating: 5,
    price: 10,
    productsInCart: [{ id: 2 }, { id: 3 }],
    updateProductsInCart: vi.fn(),
  };

  const useProductMock = {
    quantity: 1,
    updateQuantity: vi.fn(),
    addToCartHandler: vi.fn(),
    removeFromCart: vi.fn(),
    quantityInCart: 0,
  };

  beforeEach(() => {
    user = userEvent.setup();

    useProduct.mockReturnValue(useProductMock);

    render(<Product {...props} />);
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

  it('renders ProductQuantity component', () => {
    const productQuantity = screen.getByTestId('product quantity');

    expect(productQuantity).toBeInTheDocument();
    expect(ProductQuantity).toHaveBeenCalledWith(
      expect.objectContaining({
        title: props.title,
        updateQuantity: useProductMock.updateQuantity,
        quantity: useProductMock.quantity,
      }),
      {}
    );
  });

  it('renders QuantityInCart component', () => {
    const quantityInCart = screen.getByTestId('quantity in cart');

    expect(quantityInCart).toBeInTheDocument();
    expect(QuantityInCart).toHaveBeenCalledWith(
      expect.objectContaining({
        id: props.id,
        quantityInCart: useProductMock.quantityInCart,
        removeFromCart: useProductMock.removeFromCart,
      }),
      {}
    );
  });

  it('calls addToCartHandler when the "Add to cart" button is clicked', async () => {
    const addToCart = screen.getByRole('button', { name: /add to cart/i });

    await user.click(addToCart);

    expect(useProductMock.addToCartHandler).toHaveBeenCalled();
  });
});
