import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeContent from './HomeContent';
import Hero from '../Hero/Hero';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Testimonials from '../Testimonials/Testimonials';
import PromoBanner from '../PromoBanner/PromoBanner';

vi.mock('../Hero/Hero');
vi.mock('../FeaturedProducts/FeaturedProducts');
vi.mock('../Testimonials/Testimonials');
vi.mock('../PromoBanner/PromoBanner');

Hero.mockImplementation(() => <div data-testid="hero"></div>);
FeaturedProducts.mockImplementation(() => (
  <div data-testid="featured-products"></div>
));
Testimonials.mockImplementation(() => <div data-testid="testimonials"></div>);
PromoBanner.mockImplementation(() => <div data-testid="promo-banner"></div>);

describe('HomeContent', () => {
  it('renders all child components ', () => {
    render(<HomeContent />);

    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('featured-products')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials')).toBeInTheDocument();
    expect(screen.getByTestId('promo-banner')).toBeInTheDocument();
  });
});
