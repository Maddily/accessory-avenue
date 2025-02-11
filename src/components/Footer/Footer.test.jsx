import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import FooterLink from '../FooterLink/FooterLink';
import ContactDetail from '../ContactDetail/ContactDetail';

vi.mock('../FooterLink/FooterLink');
vi.mock('../ContactDetail/ContactDetail');

FooterLink.mockImplementation(() => (
  <div data-testid="footerLink">Footer Link</div>
));
ContactDetail.mockImplementation(() => (
  <div data-testid="contact-detail"></div>
));

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders contact section', () => {
    const heading = screen.getByRole('heading', {
      name: /accessory avenue/i,
    });
    expect(heading).toBeInTheDocument();

    const contactDetails = screen.getAllByTestId('contact-detail');
    expect(contactDetails.length).toEqual(3);
  });

  it('renders sitemap', () => {
    const heading = screen.getByRole('heading', {
      name: /sitemap/i,
    });

    expect(heading).toBeInTheDocument();
    expect(screen.queryAllByTestId('footerLink').length).toBeGreaterThan(0);
  });

  it('renders payment methods', () => {
    const heading = screen.getByRole('heading', {
      name: /payment methods/i,
    });
    expect(heading).toBeInTheDocument();

    const paymentMethodIcons = screen.queryAllByRole('img');

    expect(paymentMethodIcons.length).toEqual(5);
  });

  it('renders copyright statement', () => {
    const copyrightStatement = screen.getByRole('paragraph', {
      name: 'copyright statement',
    });

    expect(copyrightStatement).toBeInTheDocument();
  });
});
