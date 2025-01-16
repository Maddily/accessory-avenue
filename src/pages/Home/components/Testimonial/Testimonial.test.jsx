import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
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

  it('renders a quote icon', () => {
    const quoteIcon = screen.getByRole('presentation', { name: 'quote icon' });

    expect(container).toContainElement(quoteIcon);
  });

  it('renders the review of a customer', () => {
    const review = screen.getByRole('paragraph', { name: 'review' });

    expect(container).toContainElement(review);
  });

  it('renders the name of the customer', () => {
    const name = screen.getByRole('paragraph', { name: 'customer name' });

    expect(container).toContainElement(name);
  });
});
