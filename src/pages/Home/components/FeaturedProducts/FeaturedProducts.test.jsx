import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';

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
    const products = screen.getAllByRole('article', { name: 'product' });

    expect(products.length).not.toEqual(0);
  });
});
