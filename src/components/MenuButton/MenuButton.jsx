import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MenuButton.module.css';

/**
 * Renders a button for the menu.
 *
 * @param {string} value - The button's text content
 * @param {string} path - The path which the link needs
 * @returns {JSX.Element}
 */
export default function MenuButton({ value, path }) {
  return (
    <Link className={styles['menu-button']} to={path}>
      {value}
    </Link>
  );
}

MenuButton.propTypes = {
  value: PropTypes.string,
  path: PropTypes.string,
};
