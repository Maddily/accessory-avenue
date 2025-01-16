import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
  let footer;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    footer = screen.getByRole('contentinfo');
  });

  it('renders contact section', () => {
    const heading = screen.getByRole('heading', {
      name: /the accessory avenue/i,
    });
    expect(footer).toContainElement(heading);

    const address = screen.getByText(
      /1234 elm street, suite 567silicon bay, ca 90210/i
    );
    expect(footer).toContainElement(address);

    const phone = screen.getByText(/\(555\) 123-4567/i);
    expect(footer).toContainElement(phone);

    const email = screen.getByText(/support@accessoryavenue\.com/i);
    expect(footer).toContainElement(email);
  });

  it('renders sitemap', () => {
    const heading = screen.getByRole('heading', {
      name: /sitemap/i,
    });
    expect(footer).toContainElement(heading);

    const homeButton = within(footer).queryByRole('link', {
      name: /home/i,
    });
    expect(homeButton).not.toBeNull();
  });

  it('renders payment methods', () => {
    const heading = screen.getByRole('heading', {
      name: /payment methods/i,
    });
    expect(footer).toContainElement(heading);

    const paymentMethodIcons = within(footer).queryAllByRole('img');

    expect(paymentMethodIcons.length).toEqual(5);
  });

  it('renders copyright statement', () => {
    const copyrightStatement = screen.getByText(
      /© 2025 the accessory avenue\. all rights reserved\./i
    );

    expect(footer).toContainElement(copyrightStatement);
  });
});
