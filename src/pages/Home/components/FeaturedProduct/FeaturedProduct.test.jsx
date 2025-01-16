import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
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
    const image = screen.getByRole('img', {
      name: /beats flex wireless earphones/i,
    });

    expect(product).toContainElement(image);
  });

  it('renders the name of the product', () => {
    const name = screen.getByRole('heading', {
      name: /beats flex wireless earphones/i,
    });

    expect(product).toContainElement(name);
  });

  it('renders the rating', () => {
    const starRating = screen.getByLabelText('star rating');
    const rating = screen.getByLabelText('rating');

    expect(product).toContainElement(starRating);
    expect(product).toContainElement(rating);
  });

  it('renders the price of the product', () => {
    const price = screen.getByRole('paragraph', { name: 'price' });

    expect(product).toContainElement(price);
  });

  it('renders an Add to cart button', () => {
    const button = screen.getByRole('button', { name: /add to cart/i });

    expect(product).toContainElement(button);
  });
});
