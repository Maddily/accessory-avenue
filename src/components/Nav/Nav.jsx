import logo from '../../assets/images/logo.jpg';
import styles from './Nav.module.css';
import NavButton from '../NavButton/NavButton';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import useNav from './useNav';

/**
 * Renders a nav contaning the logo, nav links and cart button.
 *
 * @param {boolean} menuOpen - Indicates if the dropdown menu is open.
 * @param {function(boolean)} menuOpenSetter - Sets menuOpen state.
 * @returns {JSX.Element}
 */
export default function Nav({ menuOpen, menuOpenSetter, productsInCart }) {
  useNav(menuOpenSetter);

  return (
    <nav aria-label="header navigation" className={styles.nav}>
      <Link to='/'>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <ul className={styles['nav-buttons']}>
        <li className={styles['nav-button-container']}>
          <NavButton value="home" path="/" />
        </li>
        <li className={styles['nav-button-container']}>
          <NavButton value="shop" path="/shop" />
        </li>
        <li className={styles['nav-button-container']}>
          <NavButton value="faqs" path="/faqs" />
        </li>
      </ul>
      <div className={styles['cart-menu-close-container']}>
        <Cart productsInCart={productsInCart} />
        {/* Render a menu or a close menu button */}
        {menuOpen ? (
          <button
            className={styles.x}
            onClick={() => {
              menuOpenSetter(false);
            }}
          >
            <Icon
              color="#fff"
              tabIndex={0}
              path={mdiClose}
              size={1}
              title="Close menu"
            />
          </button>
        ) : (
          <button
            className={styles['menu-icon']}
            onClick={() => {
              menuOpenSetter(true);
            }}
          >
            <Icon
              color="#fff"
              tabIndex={0}
              path={mdiMenu}
              size={1}
              title="Menu"
            />
          </button>
        )}
      </div>
    </nav>
  );
}

Nav.propTypes = {
  menuOpen: PropTypes.bool,
  menuOpenSetter: PropTypes.func,
  productsInCart: PropTypes.array,
};
