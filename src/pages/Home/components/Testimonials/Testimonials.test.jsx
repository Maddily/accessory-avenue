import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Testimonials from './Testimonials';
import Testimonial from '../Testimonial/Testimonial';

vi.mock('../Testimonial/Testimonial');
Testimonial.mockImplementation(() => <div data-testid="testimonial"></div>);

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
    const heading = within(container).queryByRole('heading');

    expect(heading).toBeTruthy();
  });

  it('renders testimonials', () => {
    const testimonials = within(container).queryAllByRole('article', {
      name: 'testimonial',
    });

    expect(testimonials.length).toBeGreaterThan(0);
  });
});
