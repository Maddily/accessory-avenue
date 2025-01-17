import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

vi.mock('../FeaturedProduct/FeaturedProduct');
FeaturedProduct.mockImplementation(() => (
  <div data-testid="product">product</div>
));

describe('FeaturedProducts', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <FeaturedProducts />
      </BrowserRouter>
    );
  });

  it('renders a heading', () => {
    const heading = screen.queryByRole('heading', {
      name: /featured products/i,
    });

    expect(heading).not.toBeNull();
  });

  it('renders products', () => {
    const products = screen.getAllByTestId('product');

    expect(products.length).not.toEqual(0);
  });
});
