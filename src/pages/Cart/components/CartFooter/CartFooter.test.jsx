import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartFooter from './CartFooter';
import { BrowserRouter } from 'react-router-dom';

describe('CartFooter', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CartFooter total={619.941112} />
      </BrowserRouter>
    );
  });

  it('renders the estimated total with two decimal places', () => {
    const estimatedTotal = screen.getByRole('paragraph', {
      name: 'estimated total',
    });

    expect(estimatedTotal).toBeInTheDocument();
    expect(estimatedTotal.textContent).toMatch(/estimated total: \$619.94/i);
  });

  it('renders a note about taxes, discounts and shipping', () => {
    const note = screen.getByRole('paragraph', {
      name: 'taxes, disacount and shipping note',
    });

    expect(note).toBeInTheDocument();
  });

  it('renders a link for checking out', () => {
    const checkout = screen.getByRole('link', { name: /check out/i });

    expect(checkout).toBeInTheDocument();
  });
});
