import logo from '../../assets/images/logo.jpg';
import styles from './Nav.module.css';
import NavButton from '../NavButton/NavButton';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

/**
 * Renders a nav contaning the logo, nav links and cart button.
 *
 * @param {boolean} menuOpen - Indicates if the dropdown menu is open.
 * @param {function(boolean)} menuOpenSetter - Sets menuOpen state.
 * @returns {JSX.Element}
 */
export default function Nav({ menuOpen, menuOpenSetter }) {
  return (
    <nav aria-label='header navigation' className={styles.nav}>
      <img className={styles.logo} src={logo} alt="logo" />
      <ul className={styles['nav-buttons']}>
        <li className={styles['nav-button-container']}>
          <NavButton value="home" path="/" />
        </li>
        <li className={styles['nav-button-container']}>
          <NavButton value="shop" path="/" />
        </li>
      </ul>
      <div className={styles['cart-menu-close-container']}>
        <Cart path='/' />
        {/* Render a menu or a close menu button */}
        {menuOpen ? (
          <Icon
            path={mdiClose}
            size={1}
            title="Close menu"
            className={styles.x}
            onClick={() => {
              menuOpenSetter(false);
            }}
          />
        ) : (
          <Icon
            path={mdiMenu}
            size={1}
            title="Menu"
            className={styles['menu-icon']}
            onClick={() => {
              menuOpenSetter(true);
            }}
          />
        )}
      </div>
    </nav>
  );
}

Nav.propTypes = {
  menuOpen: PropTypes.bool,
  menuOpenSetter: PropTypes.func,
};
