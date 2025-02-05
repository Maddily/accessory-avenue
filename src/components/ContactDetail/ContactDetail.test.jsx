import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ContactDetail from './ContactDetail';

vi.mock('@mdi/react', () => ({
  default: vi.fn((iconPath) => (
    <svg data-testid="icon">
      <path data-testid="path" d={iconPath.path}></path>
    </svg>
  )),
}));

describe('ContactDetail', () => {
  beforeEach(() => {
    render(
      <ContactDetail iconPath="icon-path" label="email" data="email address" />
    );
  });

  it('renders an icon', () => {
    const svgIcon = screen.getByTestId('icon');
    expect(svgIcon).toBeInTheDocument();

    const path = within(svgIcon).getByTestId('path');
    expect(path).toHaveAttribute('d', 'icon-path');
  });

  it('renders a label', () => {
    const label = screen.getByRole('heading', { name: /email/i });

    expect(label).toBeInTheDocument();
  });

  it('renders the contact detail', () => {
    const contactDetail = screen.getByRole('paragraph');
    expect(contactDetail.textContent).toMatch(/email address/i);
  });
});
