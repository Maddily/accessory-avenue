import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import PromoBanner from './PromoBanner';

describe('PromoBanner', () => {
  let banner;
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <PromoBanner />
      </BrowserRouter>
    );

    banner = screen.getByRole('article', {
      name: /promotional banner/i,
    });
  });

  it('renders a heading', () => {
    const heading = within(banner).queryByRole('heading');

    expect(heading).toBeTruthy();
  });

  it('renders a CTA button that links to shop page', async () => {
    const cta = within(banner).queryByRole('link', { name: /shop now/i });

    expect(cta).toBeTruthy();

    await user.click(cta);

    expect(window.location.href).toMatch(/shop/i);
  });
});
