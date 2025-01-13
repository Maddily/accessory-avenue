import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav', () => {
  it('renders a logo', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const headerNav = screen.getByRole('navigation', {
      name: 'header navigation',
    });
    const logo = screen.getByRole('img', {
      name: 'logo',
    });

    expect(headerNav).toContainElement(logo);
  });

  it('renders nav buttons', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const headerNav = screen.getByRole('navigation', {
      name: 'header navigation',
    });
    const homeButton = screen.getByRole('link', { name: 'home' });

    expect(headerNav).toContainElement(homeButton);
  });

  it('renders a menu button in place of close menu button when the menu is collapsed', () => {
    render(
      <BrowserRouter>
        <Nav menuOpen={false} />
      </BrowserRouter>
    );

    const headerNav = screen.getByRole('navigation', {
      name: 'header navigation',
    });
    const menuButton = screen.getByLabelText(/menu/i);
    const closeButton = screen.queryByLabelText(/close menu/i);

    expect(headerNav).toContainElement(menuButton);
    expect(closeButton).toBeNull();
  });

  it('renders a close menu button in place of menu button when the menu is open', () => {
    render(
      <BrowserRouter>
        <Nav menuOpen={true} />
      </BrowserRouter>
    );

    const headerNav = screen.getByRole('navigation', {
      name: 'header navigation',
    });
    const menuButton = screen.queryByLabelText(/^menu$/i);
    const closeButton = screen.getByLabelText(/close menu/i);

    expect(menuButton).toBeNull();
    expect(headerNav).toContainElement(closeButton);
  });

  it('renders a cart button', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const headerNav = screen.getByRole('navigation', {
      name: 'header navigation',
    });
    const cartButton = screen.getByRole('link', {
      name: /cart/i,
    });

    expect(headerNav).toContainElement(cartButton);
  });
});
