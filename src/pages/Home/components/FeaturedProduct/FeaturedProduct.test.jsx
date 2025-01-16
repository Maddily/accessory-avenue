import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedProduct from './FeaturedProduct';

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
    const image = within(product).getByRole('img', {
      name: /beats flex wireless earphones/i,
    });

    expect(image).toBeTruthy();
  });

  it('renders the name of the product', () => {
    const name = within(product).getByRole('heading', {
      name: /beats flex wireless earphones/i,
    });

    expect(name).toBeTruthy();
  });

  it('renders the rating', () => {
    const starRating = within(product).getByLabelText('star rating');
    const rating = within(product).getByLabelText('rating');

    expect(starRating).toBeTruthy();
    expect(rating).toBeTruthy();
  });

  it('renders the price of the product', () => {
    const price = within(product).getByRole('paragraph', { name: 'price' });

    expect(price).toBeTruthy();
  });

  it('renders an Add to cart button', () => {
    const button = within(product).getByRole('button', { name: /add to cart/i });

    expect(button).toBeTruthy();
  });
});
