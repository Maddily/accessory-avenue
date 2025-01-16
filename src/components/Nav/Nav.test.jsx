import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
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
    const logo = within(headerNav).queryByRole('img', {
      name: 'logo',
    });

    expect(logo).toBeTruthy();
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
    const homeButton = within(headerNav).queryByRole('link', { name: 'home' });

    expect(homeButton).toBeTruthy();
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
    const menuButton = within(headerNav).queryByLabelText(/menu/i);
    const closeButton = within(headerNav).queryByLabelText(/close menu/i);

    expect(menuButton).toBeTruthy();
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
    const menuButton = within(headerNav).queryByLabelText(/^menu$/i);
    const closeButton = within(headerNav).getByLabelText(/close menu/i);

    expect(menuButton).toBeNull();
    expect(closeButton).toBeTruthy();
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
    const cartButton = within(headerNav).getByRole('link', {
      name: /cart/i,
    });

    expect(cartButton).toBeTruthy();
  });
});
