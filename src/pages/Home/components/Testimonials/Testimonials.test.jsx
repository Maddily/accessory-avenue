import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Testimonials from './Testimonials';

describe('Testimonial', () => {
  let container;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Testimonials />
      </BrowserRouter>
    );

    container = screen.getByRole('region', { name: 'testimonial section' });
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading');

    expect(container).toContainElement(heading);
  });

  it('renders testimonials', () => {
    const testimonials = screen.getAllByRole('article', {
      name: 'testimonial',
    });

    expect(container).toContain(...testimonials);
  });
});
