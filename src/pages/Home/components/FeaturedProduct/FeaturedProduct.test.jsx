import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedProduct from './FeaturedProduct';
import Stars from '../../../../components/Stars/Stars';
import AddToCart from '../../../../components/AddToCart/AddToCart';

vi.mock('../../../../components/Stars/Stars');
vi.mock('../../../../components/AddToCart/AddToCart');

Stars.mockImplementation(() => (
  <>
    <span data-testid="star">star</span>
    <span data-testid="star">star</span>
    <span data-testid="star">star</span>
    <span data-testid="star">star</span>
    <span data-testid="star">star</span>
  </>
));
AddToCart.mockImplementation(() => <button data-testid="add-to-cart"></button>);

describe('FeaturedProduct', () => {
  let product;

  beforeEach(() => {
    const productData = {
      id: 3,
      title: 'Beats Flex Wireless Earphones',
      price: 49.99,
      rating: 4.17,
      image:
        'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/thumbnail.png',
    };

    render(
      <BrowserRouter>
        <FeaturedProduct product={productData} />
      </BrowserRouter>
    );

    product = screen.getByRole('article', { name: 'product' });
  });

  it('renders the image of the product', () => {
    const image = within(product).queryByRole('img', {
      name: /beats flex wireless earphones/i,
    });

    expect(image).toBeTruthy();
  });

  it('renders the name of the product', () => {
    const name = within(product).queryByRole('heading', {
      name: /beats flex wireless earphones/i,
    });

    expect(name).toBeTruthy();
  });

  it('renders the rating', () => {
    const starRating = within(product).queryByLabelText('star rating');
    const rating = within(product).queryByLabelText('rating');

    expect(starRating).toBeTruthy();
    expect(rating).toBeTruthy();
  });

  it('renders the price of the product', () => {
    const price = within(product).queryByRole('paragraph', { name: 'price' });

    expect(price).toBeTruthy();
  });

  it('renders an Add to cart button', () => {
    const button = within(product).queryByRole('button', {
      name: /add to cart/i,
    });

    expect(button).toBeTruthy();
  });
});
