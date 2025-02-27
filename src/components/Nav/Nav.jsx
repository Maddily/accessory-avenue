import logo from '../../assets/images/logo.png';
import styles from './Nav.module.css';
import NavButton from '../NavButton/NavButton';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useNav from './useNav';

/**
 * Renders a nav contaning the logo, nav links and cart button.
 *
 * @param {boolean} menuOpen - Indicates if the dropdown menu is open.
 * @param {function(boolean)} setMenuOpen - Sets menuOpen state.
 * @returns {JSX.Element}
 */
export default function Nav({ menuOpen, setMenuOpen }) {
  useNav(setMenuOpen);

  return (
    <nav aria-label="header navigation" className={styles.nav}>
      <Link aria-label="Go to home page" to="/" className={styles['logo-link']}>
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
      {/* Render a menu or a close menu button */}
      {menuOpen ? (
        <button
          className={styles.x}
          onClick={() => {
            setMenuOpen(false);
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
            setMenuOpen(true);
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
    </nav>
  );
}

Nav.propTypes = {
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
};

