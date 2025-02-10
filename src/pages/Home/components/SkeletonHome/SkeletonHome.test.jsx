import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkeletonHome from './SkeletonHome';

describe('SkeletonHome', () => {
  beforeEach(() => {
    render(<SkeletonHome />);
  });

  it('renders a skeleton hero section', () => {
    const hero = screen.getByLabelText('skeleton-hero');

    expect(hero).toBeInTheDocument();
  });

  it('renders a skeleton featured products heading', () => {
    const heading = screen.getByLabelText('skeleton-featured-products-heading');

    expect(heading).toBeInTheDocument();
  });

  it('renders four skeleton featured products', () => {
    const products = screen.getAllByLabelText('skeleton-product');

    expect(products.length).toEqual(4);
  });

  it('renders a skeleton testimonials section', () => {
    const testimonials = screen.getByLabelText('skeleton-testimonials');

    expect(testimonials).toBeInTheDocument();
  });

  it('renders a skeleton promo banner', () => {
    const promoBanner = screen.getByLabelText('skeleton-promo-banner');

    expect(promoBanner).toBeInTheDocument();
  });
});
