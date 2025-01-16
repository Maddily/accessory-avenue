import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero', () => {
  let container;
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    container = screen.getByRole('region', { name: 'hero' });
  });

  it('renders a headline', () => {
    const heading = screen.getByRole('heading');

    expect(container).toContainElement(heading);
  });

  it('renders a paragraph', () => {
    const p = screen.getByRole('paragraph');

    expect(container).toContainElement(p);
  });

  it('renders a CTA button that redirects to the shop page', async () => {
    const cta = screen.getByRole('link', { name: /shop now/i });

    expect(container).toContainElement(cta);

    await user.click(cta);

    expect(window.location.href).toMatch(/shop/);
  });

  it('renders an image', () => {
    const image = screen.getByRole('img');

    expect(container).toContainElement(image);
  });
});
