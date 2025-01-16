import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomeContent } from './HomeContent';
import Hero from '../Hero/Hero';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Testimonials from '../Testimonials/Testimonials';
import PromoBanner from '../PromoBanner/PromoBanner';

vi.mock('../Hero/Hero');
vi.mock('../FeaturedProducts/FeaturedProducts');
vi.mock('../Testimonials/Testimonials');
vi.mock('../PromoBanner/PromoBanner');

Hero.mockImplementation(() => <div>Hero Component</div>);
FeaturedProducts.mockImplementation(() => (
  <div>Featured Products Component</div>
));
Testimonials.mockImplementation(() => <div>Testimonials Component</div>);
PromoBanner.mockImplementation(() => <div>Promo Banner Component</div>);

describe('HomeContent', () => {
  it('renders all child components ', () => {
    render(<HomeContent />);

    expect(screen.getByText('Hero Component')).toBeInTheDocument();
    expect(screen.getByText('Featured Products Component')).toBeInTheDocument();
    expect(screen.getByText('Testimonials Component')).toBeInTheDocument();
    expect(screen.getByText('Promo Banner Component')).toBeInTheDocument();
  });
});
