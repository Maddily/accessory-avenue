import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
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
    const heading = within(container).getByRole('heading');

    expect(heading).toBeTruthy();
  });

  it('renders a paragraph', () => {
    const p = within(container).getByRole('paragraph');

    expect(p).toBeTruthy();
  });

  it('renders a CTA button that redirects to the shop page', async () => {
    const cta = within(container).getByRole('link', { name: /shop now/i });

    expect(cta).toBeTruthy();

    await user.click(cta);

    expect(window.location.href).toMatch(/shop/);
  });

  it('renders an image', () => {
    const image = within(container).getByRole('img');

    expect(image).toBeTruthy();
  });
});
