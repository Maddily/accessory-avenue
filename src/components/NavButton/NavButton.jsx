import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavButton.module.css';

/**
 * Renders a button for the nav element.
 *
 * @param {string} value - The button's text content
 * @param {string} path - The path which the link needs
 * @returns {JSX.Element}
 */
export default function NavButton({ value, path }) {
  return (
    <Link className={styles['nav-button']} to={path}>
      {value}
    </Link>
  );
}

NavButton.propTypes = {
  value: PropTypes.string,
  path: PropTypes.string,
};
