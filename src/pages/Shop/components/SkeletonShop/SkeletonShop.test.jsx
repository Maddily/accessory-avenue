import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkeletonShop from './SkeletonShop';

describe('SkeletonShop', () => {
  beforeEach(() => {
    render(<SkeletonShop />);
  });

  it('renders a skeleton heading', () => {
    const heading = screen.getByLabelText('skeleton-heading');

    expect(heading).toBeInTheDocument();
  });

  it('renders six skeleton products', () => {
    const products = screen.getAllByLabelText('skeleton-product');

    expect(products.length).toEqual(6);
  });
});
