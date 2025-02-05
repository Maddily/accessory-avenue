import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Testimonial from './Testimonial';

describe('Testimonial', () => {
  let container;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Testimonial />
      </BrowserRouter>
    );

    container = screen.getByRole('article', { name: 'testimonial' });
  });

  it('renders the review of a customer', () => {
    const review = within(container).queryByRole('paragraph', { name: 'review' });

    expect(review).toBeTruthy();
  });

  it('renders the name of the customer', () => {
    const name = within(container).queryByRole('paragraph', { name: 'customer name' });

    expect(name).toBeTruthy();
  });
});
